package store

import (
	"testing"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Testing Verification function used during Sign-In
func TestCalendar(t *testing.T) {
	db, err := gorm.Open(sqlite.Open("calendarEvents.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&Event{})

	// Create Database
	db.Create(&Event{EventTitle:"GBM", EventDate: "09-09-09", EventURL: "google.com", EventDescription: "General Body Meeting", EventClub: "UF CS Club", EventLocation: "CSE Building"})


	result := VerifyEvent("GBM")
	actual := true

	if result != actual {
		t.Errorf("Correct user info was not found in database.")
	}
}