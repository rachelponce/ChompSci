# Sprint 4

## Work Completed:
1) Created an about page which not only displays information about the team and our project, but also each team member's personally created avatar.
2) Created a new opportunities page with displays opportunities for research, internships, tutoring, clubs, and more in a messaging/blog-posting format. 
3) Created a profile page a user can access once properly signed in that is filled with default information from database
4) Using JWT Authentication and Local Storage, a user can remain signed in while visiting any tab on website until logging out
5) Updated the Calendar so that signed-in users can dynamically add new events. 
6) Updated the Home page slideshow so that it displays club/organization event posters alongside information about the event. 

## Front-end Unit Testing
Home page:
- Tests header image's visibility
- Tests that header image is defined
- Tests for the correct class of header image
- Tests that the slide deck is visible
- Tests that the slide deck is defined and renders
- Tests for the correct class of the slide deck

Landing page: 
- Tests visibility for text on landing page
- Tests that headers on page are defined
- Tests for correct image being rendered
- Tests that image is defined
- Tests for image's visibility
- Tests for typewriter package's visibility
- Tests that typewriter package is defined and renders

Calendar page: 
- Tests that calendar component is defined
- Tests that body of calendar is able to be rendered
- Tests for the correct class of calendar body
- Tests that correct month and date are visible, defined, and rendered

About page:  
- Tests that avatars for each member are defined
- Tests for visibility of images
- Tests that images render properly 
- Tests that the body paragraphs use the correct classes and are rendered, defined 

Opportunities page: 
- Tests that the "blog" is defined
- Tests that the blog renders and is visible 
- Tests that each speech bubble is defined, rendered, and visible 

## Cypress Testing
For the last sprint, Cypress testing files were created for the remaining components. 
1) Register Form: multiple tests creating to check whether each input field takes input (first name, last name, email, password) and whether text and buttons render.
2) Opportunities page: testing for the rendering of message bubbles on the page.
3) Opportunities Message Form: tests for the input of a message and the click of the submit button.
4) About page: testing for the rendering of text and the visibility of all character logos.
5) Miscellaneous: testing for the rendering of the landing page, home page slider, and App.tsx.


## Back-end Unit Testing
### API Unit Tests
1) Testing Verification function used during Sign-In
```
func TestVerification(t *testing.T) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	// Create
	//db.Create(&User{FirstName: "Rachel", LastName: "Ponce", Email: "rachel.ponce@ufl.edu", Password: "hello123", UserType: 1})
	//db.Create(&User{FirstName: "Maria", LastName: "Ponce", Email: "maria.ponce@ufl.edu", Password: "apple123", UserType: 2})

	got := Verification("rachel.ponce@ufl.edu", "hello123")
	want := true

	if got != want {
		t.Errorf("Correct user info was not found in database.")
	}
}
```
2) Testing First function which will retrieve user's first name from database for Profile
```
func TestFirst(t *testing.T) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	got := First("rachel.ponce@ufl.edu")
	want := "Rachel"

	if got != want {
		t.Errorf("got %q, wanted %q", got, want)
	}
}
```
3) Testing Last function which will retrieve user's last name from database for Profile
```
func TestLast(t *testing.T) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	got := Last("rachel.ponce@ufl.edu")
	want := "Ponce"

	if got != want {
		t.Errorf("got %q, wanted %q", got, want)
	}
}
```
4) Testing Email function which will retrieve user's email from database for Profile
```
func TestEmail(t *testing.T) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	got := Email("rachel.ponce@ufl.edu")
	want := "rachel.ponce@ufl.edu"

	if got != want {
		t.Errorf("got %q, wanted %q", got, want)
	}
}
```
5) Testing UserType function which will retrieve user's type from database for Profile
```
func TestUserType(t *testing.T) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	got := UserType("rachel.ponce@ufl.edu")
	want := "1"

	if got != want {
		t.Errorf("got %q, wanted %q", got, want)
	}
}
```

### Valid User Input Testing

1) Testing all minimum requirements
```
func TestAllValidations(t *testing.T) {
	user := User {
		FirstName:	"J",
		LastName: 	"D",
		Email:          "email",
		Password: 	"",
		UserType: 	1,
	}
	validate := validator.New()
	err := validate.Struct(user)
	//if err != nil {
		//fmt.Println(err.Error())
	//}

	//assert.Equal(t, err, ) // checks if expected result and actual result are equal
	//assert.NotEmpty(t, usr.Password) // checks if variable is empty
	assert.NoError(t, err, user) // testing for any errors
}
```

2) Testing all valid requirements
```
func TestPassingRequirements(t *testing.T) {
	testSetup()

	user := &User{
		FirstName:	"Jane",
		LastName:	"Doe",
		Email:		"email@address.com",
		Password:	"password",
		UserType:	1,
	}

	validate := validator.New()
	err := validate.Struct(user)
	/* if err != nil {
		fmt.Println(err.Error())
	} */

	//assert.Equal(t, 3, user.UserType) // check if [2] and [3] are equal
	//assert.NotEmpty(t, user.Email)
	//assert.NotEmpty(t, user.Password)
	assert.NoError(t, err, user)
}
```

3) Testing all invalid requirements
```
func TestFailingRequirement(t *testing.T) {
	testSetup()
	
	user := &User{
		FirstName:	"Jane123", // FAIL, alpha only
		LastName: 	"Doe123", // FAIL, alpha only
		Email:		"~!!!!!email@gmail.com", // FAIL, does not exclude excludesall=!#?$%^&*()+-~
		Password:	"PASSword1234567891234567891234", // FAIL, length > 25
		UserType: 	1,
	}

	validate := validator.New()
	err := validate.Struct(user)
    /*if err != nil {
		fmt.Println(err.Error())
	} */

	//assert.Equal(t, 1, user.UserType)
	//assert.NotEmpty(t, user.Email)
	//assert.NotEmpty(t, user.Password)
	assert.NoError(t, err, user)
}
```

4) Testing minimum input requirements
```
func TestFirstNameRequirement(t *testing.T) {
	testSetup()

	user := &User{
		FirstName: "J",                    // FAIL, min!=2
		LastName:  "D",                    // FAIL, min!=2
		Email:     "~!!!!!emailgmail.com", // FAIL, does not exclude excludesall=!#?$%^&*()+-~ and
		// does not meet email req.
		Password: "P", // FAIL, length < 8
		UserType: 1,
	}

	validate := validator.New()
	err := validate.Struct(user)
	assert.NoError(t, err, user)
}
```

### Database Testing


## Updated API Documentation 
### Introduction
The Chomp Sci API is organized around REST. Our API accepts form-encoded requests, returns JSON-encoded responses, and uses standard HTTP response codes and authentication.

### Errors
Chomp Sci uses conventional HTTP response codes to indicate the success or failure of an API request. The three main codes used for this application are 200, 400, and 401. The 201 HTTP status code indicates that a new resource was successfully created as a result of a valid request. The 400 HTTP status code means that the server will not process the client's request because its form is not how the API expects it to be. The 401 HTTP status code is returned when the user provides invalid or no credentials in a request. 

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

### Profile
```
api.GET("/user/:userid", profile)
```
Once a user signs in to the site and their attempt is verified with information stored in the database, they can access their personal profile. This page will have information about the user including basic details from when they first signed up to more specific information such as what year they are in, what internships they’ve done, what classes they have taken/are taking, etc. This way users can share more about themselves with other computer science students at UF to both receive opportunities and provide help based on their experience. Based on which user is logged in, the frontend will automatically send a request to the backend to retrieve the rest of that user’s information from the database.  

**func profile()**
This function serves as the connection between the front end and the back end as related to the profile page. The input is the context that contains all the information about the request that the handler might need to process it, or gin.Context. The output is a JSON response to the front end including the parts of information requested about the user. The backend will use First(), Last(), Email(), and UserType(), to retrieve each individual component of information about the user stored in one row of the database.

### User Object
```
type User struct {
	gorm.Model
	FirstName string `binding:"required,min=2,alpha"`
	LastName  string `binding:"required,min=2,alpha"`
	Email     string `gorm:"uniqueIndex" binding:"required,excludesall=!#?$%^&*()+-~,email"`
	Password  string `gorm:"uniqueIndex" binding:"required,min=8,max=25"`
	UserType  int
}
```
#### Attributes
1) **gorm.Model**: Includes a unique ID for each user and the times when the user profile was created, updated, and deleted

2) **First Name**: User’s first name

3) **Last Name**: User’s last name

4) **Email**: User’s UF email address which has the limitation of a being a unique index as not one individual will have the same email as another

5) **Password**: User’s password in the application which also has the limitation of being a unique index to prevent any unauthorized access to their accounts

### Event Object
```
type Event struct {
	gorm.Model
	EventTitle       string
	EventDate        string
	EventURL         string
	EventDescription string
	EventClub        string
	EventLocation    string
}
```
#### Attributes
1) **gorm.Model**: Includes a unique ID for each event and the times when the event row was created, updated, and deleted

2) **EventTitle**: Title of Calendar event

3) **EventDate**: Date of Calendar event 

4) **EventURL**: URL promoting Calendar event on any social media platform

5) **EventDescription**: Further description of Calendar event

6) **EventClub**: The club that is hosting the Calendar event

7) **EventLocation**: Location of Calendar event


### Functions to Interact with Database
1.	**func PrintUserInfo()**
This function verifies whether the user information being submitted through the sign-up page of the application is properly being passed to the backend to ensure it is correctly moving forward toward the database as well. The input is the user’s first name, last name, UF email address, password, and user type, and the output is the printing of these pieces of data in the server terminal. 

2.	**func UpdateTable()** 
This function establishes the backend’s connection to the SQLite database using Gorm. The input is the user’s first name, last name, UF email address, password, and user type while the output is a modification to the database whether that is creating a new entry, updating, reading, or deleting an entry. The function first determines whether the backend is able to properly connect to the database, otherwise outputting an error. Once the connection is verified, modifications to the database proceed to happen using the user information passed in through the front end.

3.	**func Verification()** 
This function verifies whether there is still a connection between the backend and the database using Gorm to verify whether the user logging in is a valid user. The input is the user’s UF email and password and the output is a boolean. What determines whether this boolean is true or false is if the username and the password input exist and belong to the same user. If so, then the user has been found in the database, therefore enabling them to access and use the functionality granted to valid users of the application. If not, then this indicates that the following user is not a valid user or has input the wrong login credentials. 

4.	**func First()** 
This function is used to retrieve the first name component of a registered user of ChompSci. The input is the user’s UF email, and the output is a string of the component returned from the database. Since the user has already been verified to exist within the database by signing in, this function will locate the first user in the database with the input email and get their first name. Before it retrieves the component, however, it verifies the connection between the back end and the database using Gorm. 

5.	**func Last()** 
This function is used to retrieve the last name component of a registered user of ChompSci. The input is the user’s UF email, and the output is a string of the component returned from the database. Since the user has already been verified to exist within the database by signing in, this function will locate the first user in the database with the input email and get their last name. Before it retrieves the component, however, it verifies the connection between the back end and the database using Gorm.

6.	**func Email()** 
This function is used to retrieve the email component of a registered user of ChompSci. The input is the user’s UF email, and the output is a string of the component returned from the database. Since the user has already been verified to exist within the database by signing in, this function will simply return the same email that was input but by still checking if it matches with the one found in the database. Before it retrieves the component, however, it verifies the connection between the back end and the database using Gorm.

7.	**func UserType()** 
This function is used to retrieve the user type component of a registered user of ChompSci. The input is the user’s UF email, and the output is a string of the component returned from the database. Since the user has already been verified to exist within the database by signing in, this function will locate the first user in the database with the input email and get their user type. Before it retrieves the component, however, it verifies the connection between the back end and the database using Gorm.


