package store

import (
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type User struct {
	Username   string `binding:`
	Password   string `binding:`
	//CreatedAt  time.Time
	//ModifiedAt time.Time
}

var Users []*User

func PrintUserInfo(Username string, Password string) {
	fmt.Println(Username, Password)
}

func UpdateTable(Username string, Password string) {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&User{})

	// Create
	db.Create(&User{Username: Username, Password: Password})

	var user User
	db.First(&user, 1) // first row in table ordered by ID
	//fmt.Println("db.First(&user,1)")
	fmt.Println("User ID:", user.ID)

	//db.Delete(&user, 1)
}

func Verification(Username string, Password string) error {
	db, err := gorm.Open(sqlite.Open("userInfo.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var user User
	db.First(&user, "username = ?", Username)

	if err := db.Where("username = ?", Username).First(&user).Error; err != nil {
		return fmt.Errorf("Invalid login credentials provided", err)
	}

	println("User found")
	return nil
}
