package store

type User struct {
	// can add requirements like string min and max length
	// "required" lets Gin know these fields are required
	Username string `binding:"required"` 
  	Password string `binding:"required"`
}

var Users []*User
