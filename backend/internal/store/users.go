package store

type User struct {
	Username   string `binding:`
	Password   string `binding:`
	//CreatedAt  time.Time
	//ModifiedAt time.Time
}

var Users []*User