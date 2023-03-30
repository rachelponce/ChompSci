# Sprint 3

## Work Completed:
1) Created a landing page for the website that advertises the website's functionality
2) Implementation of a calendar for displaying club events
3) Created home page that includes slide deck of UF event flyers 
4) Additional Sign-Up Page functionality: takes more input fields including the user's first name, last name, UF email, password, and user type which is selected in a drop-down menu ("Student", "Faculty", or "UF Club Board Member")
5) Established sign-in verification using database based on user info inputted during sign-up

## Front-end Unit Testing
1) Home page: 
    - Tests header image's visibility
    - Tests that header image is defined
    - Tests for the correct class of header image
    - Tests that the slide deck is visible
    - Tests that the slide deck is defined and renders
    - Tests for the correct class of the slide deck 
2) Landing page: 
    - Tests visibility for text on landing page
    - Tests that headers on page are defined 
    - Tests for correct image being rendered 
    - Tests that image is defined
    - Tests for image's visibility
    - Tests for typewriter package's visibility
    - Tests that typewriter package is defined and renders
3) Calendar Page: 
    - Tests that calendar component is defined
    - Tests that body of calendar is able to be rendered 
    - Tests for the correct class of calendar body
    - Tests that correct month and date are visible, defined, and rendered
4) About Page: *note: the below pages have not been implemented yet 
    - Tests that a header containing "About Page" is rendered
5) Internships Page: 
    - Tests that a header containing "Internships Page" is rendered
7) Tutoring Page: 
    - Tests that a header containing "Tutoring Page" is rendered

## Backend Unit Testing
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
2) Testing Sign-In
```
func TestRoutingSignIn(t *testing.T) {
	router := setRouter()

	w := httptest.NewRecorder()
	
	/* user := (store.User{
		FirstName: "Jane",
		LastName: "Doe",
		Email: "email@gmail.com",
		Password: "password123",
		UserType: 1,
	}) */

	req := performRequest(router, "POST", "/api/signin", user)
	assert.Equal(t, 200, w.Code)
}
```

3) Testing Sign-Up
```
func TestRoutingSignUp(t *testing.T) {
	router := setRouter()

	w := httptest.NewRecorder()

	/* user := (store.User{
		FirstName: "Jane",
		LastName: "Doe",
		Email: "email@gmail.com",
		Password: "password123",
		UserType: 1,
	}) */

	req := performRequest(router, "POST", "/api/signup", user)

	router.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)
}
```

4) Sign-In and Sign Up helper functions NewRequest and performRequest
```
func NewRequest(router *gin.Engine, method, path, body string) *http.Request {
	req, err := http.NewRequest(method, path, strings.NewReader(body))
	if err != nil {
		//log.Panic().Err(err).Msg("Error creating new request")
	}
	return req
}

func performRequest(router *gin.Engine, method, path, body string) *httptest.ResponseRecorder {
	req := NewRequest(router, method, path, body)
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)
	return rec
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

## Updated API Documentation 
### Introduction
The Chomp Sci API is organized around REST. Our API accepts form-encoded requests, returns JSON-encoded responses, and uses standard HTTP response codes and authentication.

### Errors
Chomp Sci uses conventional HTTP response codes to indicate the success or failure of an API request. The two main codes used for this application are 201 and 401. The 201 HTTP status code indicates that a new resource was successfully created as a result of a valid request. The 401 HTTP status code is returned when the user provides invalid or no credentials in a request. 

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


### Functions to Interact with Database
1.	**func PrintUserInfo()**
This function verifies whether the user information being submitted through the sign-up page of the application is properly being passed to the backend to ensure it is correctly moving forward toward the database as well. The input is the user’s first name, last name, UF email address, password, and user type, and the output is the printing of these pieces of data in the server terminal. 

2.	**func UpdateTable()** 
This function establishes the backend’s connection to the SQLite database using Gorm. The input is the user’s first name, last name, UF email address, password, and user type while the output is a modification to the database whether that is creating a new entry, updating, reading, or deleting an entry. The function first determines whether the backend is able to properly connect to the database, otherwise outputting an error. Once the connection is verified, modifications to the database proceed to happen using the user information passed in through the front end.

3.	**func Verification()** 
This function verifies whether there is still a connection between the backend and the database using Gorm to verify whether the user logging in is a valid user. The input is the user’s UF email and password and the output is a boolean. What determines whether this boolean is true or false is if the username and the password input exist and belong to the same user. If so, then the user has been found in the database, therefore enabling them to access and use the functionality granted to valid users of the application. If not, then this indicates that the following user is not a valid user or has input the wrong login credentials. 
