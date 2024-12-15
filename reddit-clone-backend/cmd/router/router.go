package router

import (
	"reddit-clone-backend/internal/comment"
	"reddit-clone-backend/internal/like"
	"reddit-clone-backend/internal/post"
	"reddit-clone-backend/internal/user"
	"reddit-clone-backend/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var r *gin.Engine

func InitRouter(userHandler *user.Handler, postHandler *post.Handler, commentHandler *comment.Handler, likeHandler *like.Handler) {
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

	r.GET("/get-all-posts", postHandler.GetAllPosts)

	r.GET("/get-all-comments", commentHandler.GetAllComments)

	r.GET("/get-all-likes", likeHandler.GetAllLikes)

	postRoutes := r.Group("/posts", middleware.JWTAuthMiddleware())
	{
		postRoutes.POST("/", postHandler.CreatePost)

		postRoutes.GET("/user/:userID", postHandler.GetPostsByUserID)
		postRoutes.GET("/:postID", postHandler.GetPostByPostID)
		postRoutes.PATCH("/:postID", postHandler.UpdatePost)
	}

	commentRoutes := r.Group("/comments", middleware.JWTAuthMiddleware())
	{
		commentRoutes.POST("/", commentHandler.CreateComment)
	}

	likeRoutes := r.Group("/likes", middleware.JWTAuthMiddleware())
	{
		likeRoutes.POST("/", likeHandler.CreateLike)
		likeRoutes.GET("/:userID", likeHandler.GetAllLikesByUserID)
	}
}

func Start(addr string) error {
	return r.Run(addr)
}
