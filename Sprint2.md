# Sprint 2

## Work Completed:
1) Front-end and backend connection 
2) Improvement of front-end organization and linking
3) Sign-in page fully functional
4) Addition of website footer with logos/links
5) Established connection with database to save user login information

## Front-end Unit Testing
* Unit tests for five of the pages available on the website test each page for rendered components. Pages include Home, About, Calendar, Tutoring, and Internships. Test for rendered headers. Completed using react-testing-library. Very basic tests were done to get a feel of how unit testing works and can be used to test the functionality of different components of the application. In future Sprints we will implement more advanced tests as we work to develop more complex aspects of our app like user profiles and discussion posts. 

## Cypress Front-end Test
* Very simple Cypress testing created for the Sign-Up Page and the Footer components. As demonstrated in our Sprint 2 video, we were successfully able to integrate Cypress into our project and test the rendering of a couple of front-end components. In future Sprints, we will work on more complex testing now that we have an understanding of how to work with Cypress.

## Backend Unit Testing
* Unit tests for the backend were created using... In future sprints, we will work on creating more advanced tests to detect more minor issues that may have gone unnoticed in our current tests. We will also be creating tests to examine our database's processing of user information to ensure that all information is correct and being stored properly for all front end requests made.

## API Documentation 
### router.go
1. **func setRouter()**
In this function, the default gin router and the ability to redirect the route with handlers is made. Most importantly, the API route group is created with two post requests for the sign-up page and the sign-in page. The post request for the sign-up page is meant to pass in user login information to the server to store as a valid user in a database. The post request for the sign-in page is meant to pass in user login information to verify whether the user is a valid user according to the information already stored in the database. 

### user.go
1.	**func signUp()**
This function establishes the connection between the front end and the back end as related to the sign-up page. The input is the context that contains all the information about the request that the handler might need to process it, or gin.Context. The output is either an error if binding fails and the connection between the front end and back end is not made, or a message and a JSON Web Token (JWT) for authentication. In addition, if connection is successful, entry will use PrintUserInfo() and UpdateTable() to move that data into the database and essentially store that user’s information as a valid user of the web application.

2.	**func signIn()**
This function establishes the connection between the front end and the back end as related to the sign-in page. The input is the context that contains all the information about the request that the handler might need to process it, or gin.Context. The output is either an error if binding fails and the connection between the front end and back end is not made, or a message and a JSON Web Token (JWT) for authentication. 

### users.go
1.	**func PrintUserInfo()**
This function verifies whether the user information being submitted through the sign-up page of the application is properly being passed to the backend to ensure it is correctly moving forward toward the database as well. The input is the user’s username and password and the output is the printing of these two pieces of data in the server terminal. 

2.	**func UpdateTable()** 
This function establishes the backend’s connection to the SQLite database using Gorm. The input is the user’s username and password while the output is a modification to the database whether that is creating a new entry, updating, reading, or deleting an entry. The function first determines whether the backend is able to properly connect to the database, otherwise outputting an error. Once the connection is verified, modifications to the database proceed to happen using the user information passed in through the front end.
