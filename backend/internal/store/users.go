package store

import (
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	//"gopkg.in/go-playground/validator.v9"
)

type User struct {
	gorm.Model
	FirstName string `validate:"required,min=2"`
	LastName  string `validate:"required,min=2"`
	Email     string `gorm:"uniqueIndex"`
	Password  string `gorm:"uniqueIndex"`
	UserType  int
	// CreatedAt
	// UpdatedAt
	// DeletedAt
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

	//db.First(&user, "email = ? AND password = ?", Email, Password)

	if err := db.Where("email = ? AND password = ?", Email, Password).First(&user).Error; err != nil {
		return false
	}

	/*

		db.First(&user, "email = ?", Email) // Find user with email provided in parameter

		if err := db.Where("email = ?", Email).First(&user).Error; err != nil {
			return false
		}
	*/

	println("User found")
	return true
}

