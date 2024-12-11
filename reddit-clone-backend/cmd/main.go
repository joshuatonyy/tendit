package main

import (
	"log"
	"reddit-clone-backend/cmd/router"
	"reddit-clone-backend/db"
	"reddit-clone-backend/db/sqlc"
	"reddit-clone-backend/internal/user"
)

func main() {
	dbConn, err := db.NewDatabase()
	if err != nil {
		log.Fatalf("Initialize db connection failed %s", err)
	}

	queries := sqlc.New(dbConn.GetDB())

	userRep := user.NewRepository(queries)
	userSvc := user.NewService(userRep)
	userHandler := user.NewHandler(userSvc)


	router.InitRouter(userHandler)
	router.Start("0.0.0.0:8080")
}
