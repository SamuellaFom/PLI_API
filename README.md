# PLI-API

### Introduction
In this project, you will find a REST API that returns several routes.

### Characteristics
  * The dog must be authenticated in order to make requests.
  * You will need to have set the env variable in a .env file to run it. Go see the example in the file .env.example

### Installation Guide
  * Run ``npm install`` to install all dependencies
  * Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Use
  * Run ```npm run dev``` to start the application.
  * Connect to the API using Postman on port 3000.  

### API Endpoints

###### dogs Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /dogs/ | To return all dogs|
| GET | /dogs/:id | To return the searched dog |
| POST | /dogs/register/ | To return a token |
| POST | /dogs/auth/ | To returns nothing | 
| PUT | /dogs/update/:id | To returns the updated dog |
| PUT | /dogs/update/password/:id | To returns a message indicating that the password dog has been updated |
| DELETE | /dogs/delete/:id | To returns a message indicating that the dog has been deleted | 

###### Matchs Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /matchs/ | To return all matchs|
| GET | /matchs/:id | To return the searched match|
| POST | /matchs/create/ | To return a nothing |
| PUT | /matchs/update/:id | To returns the updated match |
| DELETE | /matchs/delete/:id | To returns a message indicating that the match has been deleted | 

###### Posts Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /posts/ | To return all posts|
| GET | /posts/:id | To return the searched post|
| POST | /posts/create/ | To return a nothing |
| PUT | /posts/update/:id | To returns the updated post |
| DELETE | /posts/delete/:id | To returns a message indicating that the post has been deleted | 

###### Likes Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /likes/ | To return all likes|
| GET | /likes/:id | To return the searched like|
| POST | /likes/create/ | To return a nothing |
| PUT | /likes/update/:id | To returns the updated like |
| DELETE | /likes/delete/:id | To returns a message indicating that the like has been deleted | 

### Technologies Used
  * NodeJS, This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for   installation and managing of dependencies and communication with databases.
  * ExpressJS, This is a NodeJS web application framework.
  * Prisma is an ORM (Object-Relational Mapping) tool that simplifies the interaction between an application and its database.