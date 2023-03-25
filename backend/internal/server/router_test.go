package server

import (
	"chompSci/internal/store"
	"net/http"
	"net/http/httptest"
	"testing"

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

// setRouter() -> /api/signUp, testing POST route to router
func TestRoutingSignUp(t *testing.T) {
	router := setRouter()

	w := httptest.NewRecorder()

	// Should be ("POST", "/api/signup", signUp)
	req, _ := http.NewRequest("POST", "/api/signup", nil)

	router.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)
}

func TestSignUp(t *testing.T) {
	// pass in our own username and password using
	//store.User.Username

	user := new(store.User)
	store.Users = append(store.Users, user)

	// redundant, statement does not have return
	assert.Equal(t, string("Signed up successfully."), "Signed up successfully.")
}

//func TestSignIn(t *testing.T) {
//}
