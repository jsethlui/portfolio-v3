
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

reviewChain = None
app = Flask(__name__)
CORS(app)

API_KEY = "AIzaSyAjDd5GTShTqLlsDN2Okyx3bLDMQ-8Dke0"

CHUNK_SIZE = 1000
CHUNK_OVERLAP = 0
CHROMA_PATH = "chroma_data"

def setUpRetriever(k=10):
    # File name --> Document loader type
    mapping = {
        "data/jeremyLouieResume.pdf": PyPDFLoader,
    }

    embedding_function = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=API_KEY)
    for key in mapping:
        loader = mapping[key](key)
        document = loader.load()

        # Split document into chunks and add to vectorstore
        textSplitter = CharacterTextSplitter(chunk_size=CHUNK_SIZE, chunk_overlap=CHUNK_OVERLAP)
        text = textSplitter.split_documents(document)
        database = Chroma.from_documents(text, embedding_function)

    retriever = database.as_retriever(k=k)
    return retriever

@app.route("/", methods=["POST"])
def sendQuery():
    rq = request.get_json()
    query = rq.get("query")

    global reviewChain
    if (reviewChain is not None):
        response = reviewChain.invoke(query)
    else:
        response = "reviewChain=none"

    data = {"response": response}
    return jsonify(data)

@app.route("/")
def main():
    chat = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=API_KEY, temperature=0, convert_system_message_to_human=True)
    template = """
               Your job is to answer questions about my professional software engineering experience and who I am as a person.

               Be as detailed as possible, but do not make up any information that is not known from the context.

               Please answer queries in first-person, as if you were me.

               If you do not know the answer to a query, please apologize and mention that you can only answer queries only about me about my professional background

               {context}
               """

    systemPrompt = SystemMessagePromptTemplate(
        prompt=PromptTemplate(
            input_variables=["context"],
            template=template
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

    output = str(reviewChain)
    return output

if __name__ == "__main__":
    app.run(debug=True, host='localhost', port=5001)
