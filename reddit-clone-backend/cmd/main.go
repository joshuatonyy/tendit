package main

import (
	"log"
	"reddit-clone-backend/cmd/router"
	"reddit-clone-backend/db"
	"reddit-clone-backend/db/sqlc"
	"reddit-clone-backend/internal/comment"
	"reddit-clone-backend/internal/post"
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

	postRep := post.NewRepository(queries)
	postSvc := post.NewService(postRep)
	postHandler := post.NewHandler(postSvc)

	commentRep := comment.NewRepository(queries)
	commentSvc := comment.NewService(commentRep)
	commentHandler := comment.NewHandler(commentSvc)


	router.InitRouter(userHandler, postHandler, commentHandler)
	router.Start("0.0.0.0:8080")
}
