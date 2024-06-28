# Backend: Getting Started

1) Create a virtual environment in `/portfolio-v3/backend` using `python3 -m venv ./venv`

2) Activate virtual environment using `source ./venv/bin/activate`

   * (Optional) verify python3 is running within virtual environment using `which python3`. Should be able to see somethign similiar to `/venv/bin/python3`

4) Install all necessary modules using `python3 -m pip install -r requirements.txt`

5) Run `echo VITE_ENDPOINT="http://127.0.0.1:[PORT]/query\nVITE_DEBUG=true" > .env.local` within `frontend` directory

6) Run `python3 main.py` to begin the backend server

7) Open [http:localhost:[PORT]](http://localhost:[PORT]) to view it in your browser.

8) If the AI bot is running successfully, you should be able to see "Success"

9) You can ask queries to the AI chat via two ways:
   * cURL: run `curl localhost:[PORT] -d '{"query": QUERY}' -H 'Content-Type: application/json'`
   * GET endpoint: enter `http:localhost:[PORT]/query/[QUERY]`
     * `[QUERY]` must be delmited by `_`
     * Example: `http:localhost:[PORT]/query/what_did_jeremy_do_in_less_than_five_sentences`

    If successful, a JSON object with the format `{"query" [QUERY], "response}: [RESPONSE]` shall be returned

10) Deactivate virtual environment `deactivate`

# Frontend: Getting Started

1) First run `npm install` to install all the packages.

2) Then, you can run `npm run dev`

3) Open [http://localhost:[PORT]](http://localhost:[PORT]) to view it in your browser

   The page will reload when you make changes.

   To get the chat bot AI running properly, you must be running the backend server.
