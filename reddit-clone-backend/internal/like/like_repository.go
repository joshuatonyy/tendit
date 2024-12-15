package like

import (
	"context"
	"reddit-clone-backend/db/sqlc"
)

type repository struct {
	queries *sqlc.Queries
}

func NewRepository(queries *sqlc.Queries) Repository {
	return &repository{queries: queries}
}

func (r *repository) CreateLike(ctx context.Context, req sqlc.CreateLikeParams)(*sqlc.Like, error) {
	like, err := r.queries.CreateLike(ctx, req)
	if err != nil {
		return nil, err
	}
	return &sqlc.Like{
		UserID: like.UserID,
		PostID: like.PostID,
	}, nil
}

func (r *repository) GetAllLikes(ctx context.Context)([]sqlc.Like, error) {
	return r.queries.GetAllLikes(ctx)
}

func (r *repository) GetAllLikesByUserID(ctx context.Context, userID int64)([]sqlc.Like, error) {
	return r.queries.GetAllLikesByUserID(ctx, userID)
}