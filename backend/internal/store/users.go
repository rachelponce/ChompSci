package store

import (
	//"errors"
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
	fmt.Println("db.First(&user,1)")
	fmt.Println("User ID:", user.ID)

	db.Delete(&user, 1)
}
