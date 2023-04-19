package server

import (
  	"net/http"
  	"chompSci/internal/store"
	//"fmt"
  	"github.com/gin-gonic/gin"
)


func addEvent(ctx *gin.Context) {
	myEvent := new(store.Event) // store user data in user variable

	if err := ctx.Bind(myEvent); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	store.Events = append(store.Events, myEvent)
	
	store.PrintEventInfo(myEvent.EventTitle, myEvent.EventDate, myEvent.EventURL, myEvent.EventDescription, myEvent.EventClub, myEvent.EventLocation)
	
	// Update table by adding new entry into database
	store.UpdateCalendarTable(myEvent.EventTitle, myEvent.EventDate, myEvent.EventURL, myEvent.EventDescription, myEvent.EventClub, myEvent.EventLocation)
	
	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Event added successfully.",
		"jwt": "123456789", 
	})
}