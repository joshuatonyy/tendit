package comment

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

func (r *repository) CreateComment(ctx context.Context, req sqlc.CreateCommentParams) (*int64, error) {
	commentID, err := r.queries.CreateComment(ctx, req)
	if err != nil {
		return nil, err
	}
	return &commentID, nil
}

func (r *repository) GetAllComments(ctx context.Context) ([]sqlc.Comment, error) {
	return r.queries.GetAllComments(ctx)
}