package router

import (
	"reddit-clone-backend/internal/user"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var r *gin.Engine

func InitRouter(userHandler *user.Handler) {
	r = gin.Default()

	config := cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Set-Cookie"},
        AllowCredentials: true,
    }

	r.Use(cors.New(config))

	r.POST("/signup", userHandler.CreateUser)
	r.POST("login", userHandler.Login)
	r.GET("/logout", userHandler.Logout)
}

func Start(addr string) error {
	return r.Run(addr)
}
