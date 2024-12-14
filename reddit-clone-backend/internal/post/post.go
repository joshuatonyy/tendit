package post

import (
	"context"
	"reddit-clone-backend/db/sqlc"
)

type CreatePostReq struct {
	UserID      int64  `json:"user_id"`
	PostTitle   string `json:"post_title"`
	PostContent string `json:"post_content"`
}

type UpdatePostReq struct {
	PostTitle   *string `json:"post_title,omitempty"`
	PostContent *string `json:"post_content,omitempty"`
}

type PostResponse struct {
	PostID      int64   `json:"post_id"`
	UserID      int64   `json:"user_id"`
	PostTitle   string  `json:"post_title"`
	PostContent *string `json:"post_content"`
}

type Repository interface {
	CreatePost(ctx context.Context, req sqlc.CreatePostParams) (*sqlc.Post, error)
	UpdatePost(ctx context.Context, req sqlc.EditPostParams) (*sqlc.Post, error)
	GetAllPosts(ctx context.Context) ([]sqlc.Post, error)
	GetPostsByUserID(ctx context.Context, userID int64) ([]sqlc.Post, error)
	GetPostByPostID(ctx context.Context, postID int64) (*sqlc.Post, error)
}

type Service interface {
	CreatePost(c context.Context, req *sqlc.CreatePostParams) (*PostResponse, error)
	UpdatePost(c context.Context, req *sqlc.EditPostParams) (*PostResponse, error)
	GetAllPosts(c context.Context) ([]PostResponse, error)
	GetPostsByUserID(c context.Context, userID int64) ([]PostResponse, error)
	GetPostByPostID(c context.Context, postID int64) (*PostResponse, error)
}
