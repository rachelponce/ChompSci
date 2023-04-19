package server

import (
  	"net/http"
  	"chompSci/internal/store"
	"fmt"
  	"github.com/gin-gonic/gin"
)

var currentUser string = " "

func draft(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"First Name": "Rachel",
		"Last Name":  "Ponce",
	})
}

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

	store.Users = append(store.Users, user)

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
	results := store.Verification(user.Email, user.Password)
	if !results {
		fmt.Println("Invalid login credentials provided")
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": "Sign in failed."})
		return
	}

	store.PrintSignIn(user.Email, user.Password)

	currentUser = user.Email

	ctx.JSON(http.StatusOK, gin.H{
		"msg": "Signed in successfully.",
		"jwt": "123456789",
	})
}

func profile(ctx *gin.Context) {
	var first string
	var last string
	var email string
	var userType string

	first = store.First(currentUser)
	last = store.Last(currentUser)
	email = store.Email(currentUser)
	userType = store.UserType(currentUser)

	fmt.Println("Name: " + first + " " + last)
	fmt.Println("Email: " + email)
	if userType == "1" {
		fmt.Println("User Type: Student")
		userType = "Student"
	}
	if userType == "2" {
		fmt.Println("User Type: Faculty")
		userType = "Faculty"
	}
	if userType == "3" {
		fmt.Println("User Type: Faculty")
		userType = "UF Club Board Member"
	}

	ctx.JSON(http.StatusOK, gin.H{
		"name":     first + " " + last,
		"email":    email,
		"userType": userType,
	})
}
