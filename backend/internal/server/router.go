package server

import (
	"net/http"
  	"github.com/gin-gonic/gin"
)

func setRouter() *gin.Engine {
  	// Creates default gin router with Logger and Recovery
  	router := gin.Default()

	// Enables automatic redirection if the current route can't be matched but a
  	// handler for the path with (without) the trailing slash exists.
  	router.RedirectTrailingSlash = true

  	// API route group
	api := router.Group("/api")
	{
		// Add /signup POST route to router and define route handler function
		api.POST("/signup", signUp)
		api.POST("/signin", signIn)
		api.POST("/calendar/add-event", addEvent)
	}

  	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
