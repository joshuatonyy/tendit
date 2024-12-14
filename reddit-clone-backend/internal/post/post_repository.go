package post

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

func (r *repository) CreatePost(ctx context.Context, req sqlc.CreatePostParams) (*sqlc.Post, error) {
	postId, err := r.queries.CreatePost(ctx, req)
	if err != nil {
		return nil, err
	}
	return &sqlc.Post{
		PostID: postId,
		UserID: req.UserID,
		PostTitle: req.PostTitle,
		PostContent: req.PostContent,
	}, nil
}

func (r *repository) UpdatePost(ctx context.Context, req sqlc.EditPostParams) (*sqlc.Post, error) {
	_, err := r.queries.EditPost(ctx, req)
	if err != nil {
		return nil, err
	}
	return r.GetPostByPostID(ctx, req.PostID)
}

func (r *repository) GetAllPosts(ctx context.Context) ([]sqlc.Post, error) {
	return r.queries.GetAllPost(ctx)
}

func (r *repository) GetPostsByUserID(ctx context.Context, userID int64) ([]sqlc.Post, error) {
	return r.queries.GetAllPostByUserID(ctx, userID)
}

func (r *repository) GetPostByPostID(ctx context.Context, postID int64) (*sqlc.Post, error) {
	post, err := r.queries.GetPostByPostID(ctx, postID)
	if err != nil {
		return nil, err
	}
	return &post, nil
}