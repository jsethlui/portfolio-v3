# Backend: Getting Started
Run python3 main.py to begin the backend server

Open [http:localhost:PORT](http://localhost:PORT) to view it in your browser.

If the AI bot is running successfully, you should be able to see "Sucess"

To invoke queries, run `curl localhost:5001 -d '{"query": QUERY}' -H 'Content-Type: application/json'`

# Frontend: Getting Started

First run `npm install` to install all the packages.

Then, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:PORT](http://localhost:PORT) to view it in your browser.

The page will reload when you make changes.

To get the chat bot AI running properly, you must be running the backend server.
