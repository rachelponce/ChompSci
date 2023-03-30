package store

import (
	"fmt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"github.com/gin-gonic/gin"
)

type User struct {
	gorm.Model
	FirstName 	string 		`validate:"required,alpha,min=2"`
	LastName 	string 		`validate:"required,alpha,min=2"`
	Email 		string 		`validate:"required,excludesall=!#?$%^&*()+-~,email"`
	Password 	string 		`validate:"required,min=8,max=25"`
	UserType 	int
}

var Users []*User

func PrintUserInfo(FirstName string, LastName string, Email string, Password string, UserType int) {
	fmt.Println(FirstName, LastName, Email, Password, UserType)
}

func UpdateTable(FirstName string, LastName string, Email string, Password string, UserType int) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	// Create
	//db.Create(&User{Username: Username, Password: Password})
	db.Create(&User{FirstName: FirstName, LastName:LastName, Email:Email, Password: Password, UserType: UserType})

	var user User
	db.First(&user, 1) // first row in table ordered by ID
	//fmt.Println("db.First(&user,1)")
	fmt.Println("User ID:", user.ID)

	//db.Delete(&user, 1)
}

// verifying Email, since duplicate names are possible
func Verification(FirstName string, Password string) error {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// need to adjust to check Email
	var user User
	db.First(&user, "username = ?", FirstName)

	if err := db.Where("username = ?", FirstName).First(&user).Error; err != nil {
		//return fmt.Errorf("Invalid login credentials provided", err)
	}

	println("User found")
	return nil
}

func testSetup() {
	gin.SetMode(gin.TestMode)
}

// can be used in Tests when valid user needs to be created
func addTestUser() (*User) {
	user := &User{
		FirstName:          "Jane",
		LastName: 			"Doe",
		Email:              "email@address.com",
		Password: 			"password123",
		UserType: 			1,
	}

	return user
}