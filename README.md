
# ChompSci

A web-based application designed to bring the UF Computer Science community together by promoting and organizing events and opportunities, as well as encouraging CS students to connect more with one another. By making the CS opportunities and resources more accessible, we can help UF computer science students to break into the world of tech and prepare for their future career.

This application has a variety of features as listed below:

1. A homepage with weekly events from different computer science-based organizations and sponsors at UF
2. A calendar with all CS events listed in one place
3. Sign-up and sign-in pages for users
4. Individual profiles for CS students, professors, and faculty
5. An opportunities tab in a message-posting format to notify students of potential research, internship, tutoring, and club opportunities at UF.
## Authors

- [Lily Cabrera ~ Back-end Engingeer](https://github.com/lilyc1)
- [Savannah Fletcher ~ Front-end Engineer](https://github.com/savannahfletcher)
- [Madeleine Glaum ~ Front-end Engineer](https://github.com/mglaum)
- [Rachel Ponce ~ Back-end Engineer](https://github.com/rachelponce)


## Tech

**Client:** React, TypeScript, CSS

**Server:** Node, Go, SQLite


## Installation

**Front-end Installations:**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Create a local clone of the repository on Github with your preferable local path for the project.

Install these locally in your project:
```bash
npm install -D npm
```
```bash
npm install -D typescript
```
```bash
npm install -D ts-node
```

Navigate to the front-end/my-app directory:
```bash
  cd front-end/my-app
```

Additionally, you must run a variety of installation commands for this project:
  
```bash
  npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```
```bash
  npm install bootstrap 
```
```bash
  npm install react-bootstrap
```
```bash
  npm install @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/timegrid
```
```bash
  npm install typewriter-effect
```
```bash
  npm i react-auth-kit
```

Testing Installations: 
```bash
  npm i jest @types/jest ts-jest typescript -D
```
```bash
  npm install --save-dev jest  
```
```bash
  npm install --save-dev @babel/preset-typescript
```

Still in the front-end/my-app directory, you can now run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

**Back-end Installations:**

Getting Gin
```
import "github.com/gin-gonic/gin"
$ go get -u github.com/gin-gonic/gin
```
Install GORM
```
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
```

Install an sqlite3 driver that conforms to the built-in database/sql interface.
```
go get github.com/mattn/go-sqlite3
```

Install the SQLite Extension in VSCode to explore and query SQLite databases
```
vscode-sqlite
```
Install package validator which implements value validations for structs and individual fields based on tags.
```
go get github.com/go-playground/validator/v10
import "github.com/go-playground/validator/v10"
```

Still in the backend/chompSite directory, you can now run:

### `go run main.go`

Runs the backend server as it listens and serves HTTP requests on http://localhost:8080 \ 

### `go test` or `go test -v`

Launches the testing in Go.
