package store

import (

	"testing"
	"github.com/go-playground/validator/v10"
	"github.com/stretchr/testify/assert"
)


func TestAllValidations(t *testing.T) {
	user := User {
		FirstName:          "J",
		LastName: 			"D",
		Email:              "email",
		Password: 			"",
		UserType: 			1,
	}
	validate := validator.New()
	err := validate.Struct(user)
	//if err != nil {
		//fmt.Println(err.Error())
	//}

	//assert.Equal(t, err, ) // checks if expected result and actual result are equal
	//assert.NotEmpty(t, usr.Password) // checks if variable is empty
	assert.NoError(t, err, user) // testing for any errors
}


func TestPassingRequirements(t *testing.T) {
	testSetup()

	user := &User{
		FirstName:          "Jane",
		LastName: 			"Doe",
		Email:              "email@address.com",
		Password: 			"password",
		UserType: 			1,
	}

	validate := validator.New()
	err := validate.Struct(user)
	/* if err != nil {
		fmt.Println(err.Error())
	} */

	//assert.Equal(t, 3, user.UserType) // check if [2] and [3] are equal
	//assert.NotEmpty(t, user.Email)
	//assert.NotEmpty(t, user.Password)
	assert.NoError(t, err, user)
}

func TestFailingRequirement(t *testing.T) {
	testSetup()
	
	user := &User{
		FirstName:          "Jane123", // FAIL, alpha only
		LastName: 			"Doe123", // FAIL, alpha only
		Email:              "~!!!!!email@gmail.com", // FAIL, does not exclude excludesall=!#?$%^&*()+-~
		Password: 			"PASSword1234567891234567891234", // FAIL, length > 25
		UserType: 			1,
	}

	validate := validator.New()
	err := validate.Struct(user)
    /*if err != nil {
		fmt.Println(err.Error())
	} */

	//assert.Equal(t, 1, user.UserType)
	//assert.NotEmpty(t, user.Email)
	//assert.NotEmpty(t, user.Password)
	assert.NoError(t, err, user)
}
