OpenAI Chatbot
This is a simple chat application that utilizes OpenAI's GPT-3 model to generate responses to user input. The application consists of a server that listens for requests from the chat application and communicates with the OpenAI API to generate responses, and a chat application that allows the user to send messages and receive responses from the server.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js
An OpenAI API key
Installing
Clone the repository to your local machine
In the root directory of the project, run npm install to install the necessary dependencies
In the root directory, create a file called .env and add the following line, replacing YOUR_API_KEY with your OpenAI API key:
Copy code
API_KEY=YOUR_API_KEY
In the root directory, run node app.js to start the server
In the client directory, run npm start to start the chat application
Built With
OpenAI API - Used to generate responses to user input
Express - Web framework used for the server
React - Front-end library used for the chat application
Authors
Akash Deep - Initial work inspired by Adrian Twarog
License
This project is licensed under the MIT License - see the LICENSE file for details.




