# Sprint 4

## Work Completed:
1) Created a landing page for the website that advertises the website's functionality
2) Implementation of a calendar for displaying club events
3) Created home page that includes slide deck of UF event flyers 
4) Additional Sign-Up Page functionality: takes more input fields including the user's first name, last name, UF email, password, and user type which is selected in a drop-down menu ("Student", "Faculty", or "UF Club Board Member")
5) User profiles: Established sign-in verification using database based on user info inputted during sign-up
6) Created an about page which not only displays information about the team and our project, but also each team member's personally created avatar.
7) Created a new opportunities page with displays opportunities for research, internships, tutoring, clubs, and more in a messaging/blog-posting format. 

## Front-end Unit Testing


## Cypress Testing
For the last sprint, Cypress testing files were created for the remaining components. 
1) Register Form: multiple tests creating to check whether each input field takes input (first name, last name, email, password) and whether text and buttons render.
2) Opportunities page: testing for the rendering of message bubbles on the page.
3) Opportunities Message Form: tests for the input of a message and the click of the submit button.
4) About page: testing for the rendering of text and the visibility of all character logos.
5) Miscellaneous: testing for the rendering of the landing page, home page slider, and App.tsx.


## Back-end Unit Testing


## Updated API Documentation 
### Introduction
The Chomp Sci API is organized around REST. Our API accepts form-encoded requests, returns JSON-encoded responses, and uses standard HTTP response codes and authentication.

### Errors
Chomp Sci uses conventional HTTP response codes to indicate the success or failure of an API request. The three main codes used for this application are 200, 400, and 401. The 201 HTTP status code indicates that a new resource was successfully created as a result of a valid request. The 400 HTTP status code means that the server will not process the client's request becauses its form is not how the API expects it to be. The 401 HTTP status code is returned when the user provides invalid or no credentials in a request. 

### Sign Up
```
api.POST("/signup", signUp)
```
When a user seeks to sign up with Chomp Sci and make an account in our application, a User object is created with parameters including their first name, last name, UF email address, password, and user type. This user information is then stored on a table using SQLite as the database engine. 

**func signUp()**
This function establishes the connection between the front end and the back end as related to the sign-up page. The input is the context that contains all the information about the request that the handler might need to process it, or gin.Context. The output is either an error if binding fails and the connection between the front end and back end is not made, or a message and a JSON Web Token (JWT) for authentication. In addition, if connection is successful, entry will use the functions  PrintUserInfo() and UpdateTable() to move that data into the database and essentially store that user’s information as a valid user of the web application.

### Sign In
```
api.POST("/signin", signIn)
```
Once a user has signed up and created an account, they are able to sign in to the platform where they can access their personal dashboard with more information about them and are granted more functionality across the application. In this process, users will input two of the five parameters they input when first signing up, their UF email and their password. This information will be passed to the backend and compared with the information stored in the database. If both the email and password exist and belong to the same user, the user will be verified as a valid user logging in. Otherwise, an error will be returned for invalid credentials.

**func signIn()**
This function establishes the connection between the front end and the back end as related to the sign-in page. The input is the context that contains all the information about the request that the handler might need to process it, or gin.Context. The output is either an error if binding fails and the connection between the front end and back end is not made, or a message and a JSON Web Token (JWT) for authentication. 

### User Object
```
type User struct {
	gorm.Model
	FirstName string `validate:"required,min=2"`
	LastName  string `validate:"required,min=2"`
	Email     string `gorm:"uniqueIndex"`
	Password  string `gorm:"uniqueIndex"`
	UserType  int
	// CreatedAt
	// UpdatedAt
	// DeletedAt
}
```
#### Attributes
1) **gorm.Model**: Includes a unique ID for each user and the times when the user profile was created, updated, and deleted

2) **First Name**: User’s first name

3) **Last Name**: User’s last name

4) **Email**: User’s UF email address which has the limitation of a being a unique index as not one individual will have the same email as another

5) **Password**: User’s password in the application which also has the limitation of being a unique index to prevent any unauthorized access to their accounts


### Profile
```
api.GET("/user/:userid", profile)
```
Profile Description


### Functions to Interact with Database
1.	**func PrintUserInfo()**
This function verifies whether the user information being submitted through the sign-up page of the application is properly being passed to the backend to ensure it is correctly moving forward toward the database as well. The input is the user’s first name, last name, UF email address, password, and user type, and the output is the printing of these pieces of data in the server terminal. 

2.	**func UpdateTable()** 
This function establishes the backend’s connection to the SQLite database using Gorm. The input is the user’s first name, last name, UF email address, password, and user type while the output is a modification to the database whether that is creating a new entry, updating, reading, or deleting an entry. The function first determines whether the backend is able to properly connect to the database, otherwise outputting an error. Once the connection is verified, modifications to the database proceed to happen using the user information passed in through the front end.

3.	**func Verification()** 
This function verifies whether there is still a connection between the backend and the database using Gorm to verify whether the user logging in is a valid user. The input is the user’s UF email and password and the output is a boolean. What determines whether this boolean is true or false is if the username and the password input exist and belong to the same user. If so, then the user has been found in the database, therefore enabling them to access and use the functionality granted to valid users of the application. If not, then this indicates that the following user is not a valid user or has input the wrong login credentials. 

