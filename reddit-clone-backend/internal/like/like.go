package like

import (
	"context"
	"reddit-clone-backend/db/sqlc"
)

type Repository interface {
	CreateLike(ctx context.Context, req sqlc.CreateLikeParams)(*sqlc.Like, error)
	GetAllLikes(ctx context.Context)([]sqlc.Like, error)
	GetAllLikesByUserID(ctx context.Context, userId int64)([]sqlc.Like, error)
}

type Service interface {
	CreateLike(ctx context.Context, postID int64, userID int64) (*sqlc.Like, error)
	GetAllLikes(ctx context.Context) ([]sqlc.Like, error)
	GetAllLikesByUserID(ctx context.Context, userID int64) ([]sqlc.Like, error)
}