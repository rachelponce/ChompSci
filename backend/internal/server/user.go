package server

import (
  	"net/http"
  	"chompSci/internal/store"
	"fmt"
  	"github.com/gin-gonic/gin"
)


func signUp(ctx *gin.Context) {
	user := new(store.User) // store user data in user variable
	// Bind() binds frontend data to user variable
	// if binding fails, set error code and message
	if err := ctx.Bind(user); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}
	// else, return JWT for authentication
	store.Users = append(store.Users, user)
	
	// Print user info to verify whether information being passed into database is correct
	store.PrintUserInfo(user.FirstName, user.LastName, user.Email, user.Password, user.UserType)
	
	// Update table by adding new entry into database
	store.UpdateTable(user.FirstName, user.LastName, user.Email, user.Password, user.UserType)
	
	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Signed up successfully.",
		"jwt": "123456789", // dummy JWT for testing
	})
}

func signIn(ctx *gin.Context) {
	user := new(store.User)

	if err := ctx.Bind(user); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		return
	}

	/*
		    // Old way of verifying users
			for _, u := range store.Users {
				if u.Username == user.Username && u.Password == user.Password {
					ctx.JSON(http.StatusOK, gin.H{
						"msg": "Signed in successfully.",
						"jwt": "123456789",
					})
					return
				}
			}
	*/

	// Current Verification for Users
	results := store.Verification(user.FirstName, user.Password) // user.FirstName ==> user.Email
	if results != nil {
		fmt.Println("Invalid login credentials provided")
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": "Sign in failed."})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Signed in successfully.",
		"jwt": "123456789",
	})

}
