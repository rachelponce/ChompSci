package store

import (
	"fmt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	//"github.com/gin-gonic/gin"
)

type Event struct {
	gorm.Model
	EventTitle string 
    EventDate string
    EventURL string
    EventDescription string
    EventClub string
    EventLocation string
}

var Events []*Event

func PrintEventInfo(EventTitle string, EventDate string, EventURL string, EventDescription string, EventClub string, EventLocation string) {
	fmt.Println(EventTitle, EventDate, EventURL, EventDescription, EventClub, EventLocation)
}

func UpdateCalendarTable(EventTitle string, EventDate string, EventURL string, EventDescription string, EventClub string, EventLocation string) {
	db, err := gorm.Open(sqlite.Open("calendarEvents.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect to calendarEvents.db")
	}

	db.AutoMigrate(&Event{})

	// Create
	db.Create(&Event{EventTitle:EventTitle, EventDate: EventDate, EventURL: EventURL, EventDescription: EventDescription, EventClub: EventClub, EventLocation: EventLocation})

	var myEvent Event
	db.First(&myEvent, 1) // first row in table ordered by ID
	fmt.Println("Event ID:", myEvent.ID)
}