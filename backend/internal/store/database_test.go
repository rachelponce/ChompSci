package store

import (
	"testing"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Testing Verification function used during Sign-In
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

// Testing First function which will retrieve user's first name from database
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

// Testing Last function which will retrieve user's last name from database
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

// Testing Email function which will retrieve user's email from database
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

// Testing UserType function which will retrieve user's type from database
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
