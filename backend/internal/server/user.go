package server

import (
  	"net/http"
  	"chompSci/internal/store"
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
	for _, u := range store.Users {
		if u.Username == user.Username && u.Password == user.Password {
			ctx.JSON(http.StatusOK, gin.H{
				"msg": "Signed in successfully.",
				"jwt": "123456789",
			})
			return
		}
	}

	// Error message printed in Sprint 2 since there are no users to "sign in"
	ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"err": "Sign in failed."})
}