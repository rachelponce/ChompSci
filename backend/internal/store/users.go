package store

import (
	"fmt"
	"strconv"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"github.com/gin-gonic/gin"
)

type User struct {
	gorm.Model
	//Username string
	FirstName string `validate:"required,min=2"`
	LastName string `validate:"required,min=2"`
	// Email 		string 		`validate:"required,excludesall=!#?$%^&*()+-~,email"`
	// Password 	string 		`validate:"required,min=8,max=25"`
	Email     string `gorm:"uniqueIndex"`
	Password  string `gorm:"uniqueIndex"`
	UserType int
	// CreatedAt
	// UpdatedAt
	// DeletedAt
}

var Users []*User

func PrintUserInfo(FirstName string, LastName string, Email string, Password string, UserType int) {
	fmt.Println(FirstName, LastName, Email, Password, UserType)
}

func PrintSignIn(Email string, Password string) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var user User

	if err := db.Where("email = ? AND password = ?", Email, Password).First(&user).Error; err != nil {
		return
	}

	fmt.Println("First Name: ", user.FirstName)
	fmt.Println("Last Name: ", user.LastName)
	fmt.Println("Email Name: ", user.Email)

	if user.UserType == 1 {
		fmt.Println("User Type: Student")
	}
	if user.UserType == 2 {
		fmt.Println("User Type: Faculty")
	}
	if user.UserType == 3 {
		fmt.Println("User Type: Club Board Member")
	}
}

func UpdateTable(FirstName string, LastName string, Email string, Password string, UserType int) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	// Create
	//db.Create(&User{Username: Username, Password: Password})
	db.Create(&User{FirstName: FirstName, LastName: LastName, Email: Email, Password: Password, UserType: UserType})

	var user User
	db.First(&user, 1) // first row in table ordered by ID
	//fmt.Println("db.First(&user,1)")
	fmt.Println("User ID:", user.ID)

	//db.Delete(&user, 1)
}

// verifying Email, since duplicate names are possible
func Verification(Email string, Password string) bool {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var user User

	if err := db.Where("email = ? AND password = ?", Email, Password).First(&user).Error; err != nil {
		return false
	}

	println("User found")
	return true
}

// Functions to retrieve specific parts of user info from database
func First(Email string) string {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var user User

	db.First(&user, "email = ?", Email)
	return user.FirstName
}

func Last(Email string) string {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var user User

	db.First(&user, "email = ?", Email)
	return user.LastName
}

func Email(Email string) string {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var user User

	db.First(&user, "email = ?", Email)
	return user.Email
}

func UserType(Email string) string {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var user User

	db.First(&user, "email = ?", Email)
	return strconv.Itoa(user.UserType)
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
