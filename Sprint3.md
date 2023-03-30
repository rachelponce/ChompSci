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

## Updated API Documentation 
