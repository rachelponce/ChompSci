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
