package server

import (
	//"chompSci/internal/store"
	"net/http"
	"net/http/httptest"
	"testing"
	"strings"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

// setRouter() -> /api/signIn, testing POST route to router
func TestRoutingSignIn(t *testing.T) {
	router := setRouter()

	w := httptest.NewRecorder()

	// Attempting to pass in signIn/signUp functions
	//server := httptest.NewServer(http.HandlerFunc(setRouter()))
	//resp, err := http.Get(server.URL)
	//b, err := ioutil.ReadAll(req.Body)

	// Should be ("POST", "/api/signin", signIn), will fail since parameter is set to nil
	req, _ := http.NewRequest("POST", "/api/signin", nil)

	router.ServeHTTP(w, req)
	// Result should equal success code 200
	assert.Equal(t, 200, w.Code)
}

func NewRequest(router *gin.Engine, method, path, body string) *http.Request {
	req, err := http.NewRequest(method, path, strings.NewReader(body))
	if err != nil {
		//log.Panic().Err(err).Msg("Error creating new request")
	}
	return req
}

func performRequest(router *gin.Engine, method, path, body string) *httptest.ResponseRecorder {
	req := NewRequest(router, method, path, body)
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)
	return rec
}

// setRouter() -> /api/signUp, testing POST route to router
func TestRoutingSignUp(t *testing.T) {
	router := setRouter()

	w := httptest.NewRecorder()

	/* user := (store.User{
		FirstName: "Jane",
		LastName: "Doe",
		Email: "email@gmail.com",
		Password: "password123",
		UserType: 1,
	}) */

	req, _ := http.NewRequest("POST", "/api/signup", nil)
	//req := performRequest(router, "POST", "/api/signup", user)

	router.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)
}
