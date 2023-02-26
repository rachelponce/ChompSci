package server

import (
	"chompSci/internal/database"
	"chompSci/internal/store"
)

func Start() {
  store.SetDBConnection(database.NewDBOptions())
  
  router := setRouter()

  // Start listening and serving requests
  router.Run(":8080")
}
