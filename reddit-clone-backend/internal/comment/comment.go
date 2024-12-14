package comment

import (
	"context"
	"reddit-clone-backend/db/sqlc"
)

type CommentResponse struct {
	CommentID int64 `json:"comment_id"`
	PostID int64 `json:"post_id"`
	UserID int64 `json:"user_id"`
	CommentContent string `json:"comment_content"`
}

type Repository interface {
	CreateComment(ctx context.Context, req sqlc.CreateCommentParams) (*int64, error)
	GetAllComments(ctx context.Context) ([]sqlc.Comment, error)
}

type Service interface {
	CreateComment(c context.Context, req *sqlc.CreateCommentParams) (*int64, error)
	GetAllComments(c context.Context)([]CommentResponse, error)
}