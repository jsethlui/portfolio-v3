
'''
curl --header "Content-type: application/json" --request POST --data '{"query": "Tell me about Jeremy in five sentences or less"}' 127.0.0.1:5001 
'''

import os
import os.path
import yaml
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate, ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.schema.runnable import RunnablePassthrough

from langchain_community.document_loaders import PyPDFLoader, TextLoader
from langchain_community.vectorstores import Chroma
from langchain.text_splitter import CharacterTextSplitter

app = Flask(__name__)
CORS(app)

reviewChain = None

DATA_DIRECTORY = None
FLASK_DEBUG = None
HOSTNAME = None
PORT = None

TEMPERATURE = None
TEMPLATE = None

CHUNK_SIZE = None
CHUNK_OVERLAP = None
CHROMA_PATH = None

def fileExtensionToLoaderLookup(fileName):
    if (fileName.endswith(".pdf" )):
        return PyPDFLoader
    if (fileName.endswith(".txt")):
        return TextLoader

def setUpRetriever(k=10):
    global DATA_DIRECTORY
    mapping = {}    # File name --> Document loader type
    for root, directories, files in os.walk(DATA_DIRECTORY):
        for name in files:
            currFileAbsolutePath = os.path.join(root, name)
            if (not currFileAbsolutePath.endswith(".DS_Store")):
                mapping[currFileAbsolutePath] = fileExtensionToLoaderLookup(currFileAbsolutePath)

    embeddingFunction = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=os.getenv("API_KEY"))
    for key in mapping:
        loader = mapping[key](key)
        document = loader.load()

        # Split document into chunks and add to vectorstore
        textSplitter = CharacterTextSplitter(chunk_size=CHUNK_SIZE, chunk_overlap=CHUNK_OVERLAP)
        text = textSplitter.split_documents(document)
        database = Chroma.from_documents(text, embeddingFunction)

    retriever = database.as_retriever(k=k)
    return retriever

def createRAG():
    # |
    # |      c1
    # |            q
    # |
    # |
    # |
    # |               c2
    # | c0
    # |____________________

    global TEMPERATURE
    global TEMPLATE
    global CHROMA_PATH
    global CHUNK_SIZE
    global CHUNK_OVERLAP

    chat = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=os.getenv("API_KEY"), temperature=TEMPERATURE, convert_system_message_to_human=True)
    TEMPLATE += "{context}"

    systemPrompt = SystemMessagePromptTemplate(
        prompt=PromptTemplate(
            input_variables=["context"],
            template=TEMPLATE
        )
    )

    humanPrompt = HumanMessagePromptTemplate(
        prompt=PromptTemplate(
            input_variables=["question"],
            template="{question}"
        )
    )

    messages = [systemPrompt, humanPrompt]
    promptTemplate = ChatPromptTemplate(
        input_variables=["context", "question"],
        messages=messages
    )

    retriever = setUpRetriever()
    outputParser = StrOutputParser()

    global reviewChain
    reviewChain = {"context": retriever, "question": RunnablePassthrough()} | promptTemplate | chat | outputParser

@app.route("/query", methods=["POST"])
@app.route("/query/<query>", methods=["GET"])
def sendQuery(query=""):
    if (request.method == "GET"):
        if (not query):
            return ('Invalid query, 404')

        userQuery = query.replace("_", " ") # Remove delimiter
    elif (request.method == "POST"):
        rq = request.get_json()
        userQuery = rq.get("query")

    global reviewChain
    if (reviewChain is not None):
        response = reviewChain.invoke(userQuery)
    else:
        response = "reviewChain=none"

    data = {"query": userQuery, "response": response}
    return jsonify(data)

@app.route("/")
def main():
    global reviewChain
    return "Success" if (reviewChain is not None) else "Fail"

if __name__ == "__main__":
    load_dotenv()   # Load API key
    with open("config.yaml") as config:
        data = yaml.safe_load(config)

        DATA_DIRECTORY = data["app"]["dataDirectory"]
        FLASK_DEBUG = bool(data["app"]["flaskDebug"])
        HOSTNAME = data["app"]["hostname"]
        PORT = int(data["app"]["port"])

        TEMPERATURE = data["ai"]["temperature"]
        TEMPLATE = data["ai"]["template"]

        CHUNK_SIZE = int(data["chunk"]["size"])
        CHUNK_OVERLAP = int(data["chunk"]["overlap"])
        CHROMA_PATH = data["chroma"]["path"]

    createRAG()
    app.run(debug=FLASK_DEBUG, host=HOSTNAME, port=PORT)
