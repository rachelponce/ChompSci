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
		api.GET("/draft", draft)          
		api.GET("/user/:userid", profile) // on Port 3000
		//api.GET("/user", profile) // on Port 8080
		api.POST("/calendar/add-event", addEvent)
		
		// Post: Does not expect something back asides from a code
		// Get: Expect something back
	}

  	router.NoRoute(func(ctx *gin.Context) { ctx.JSON(http.StatusNotFound, gin.H{}) })

	return router
}
