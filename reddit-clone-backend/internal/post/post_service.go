package post

import (
	"context"
	// "database/sql"
	"reddit-clone-backend/db/sqlc"
)

type service struct {
	repo Repository
}

func NewService(repo Repository) Service {
	return &service{repo: repo}
}

func (s *service) CreatePost(ctx context.Context, req *sqlc.CreatePostParams) (*PostResponse, error) {

	

	newPost, err := s.repo.CreatePost(ctx, sqlc.CreatePostParams{
		UserID:      req.UserID,
		PostTitle:   req.PostTitle,
		PostContent: req.PostContent,
	})
	if err != nil {
		return nil, err
	}
	return &PostResponse{
		PostID:      newPost.PostID,
		UserID:      newPost.UserID,
		PostTitle:   newPost.PostTitle,
		PostContent: newPost.PostContent,
	}, nil
}

func (s *service) UpdatePost(ctx context.Context, req *sqlc.EditPostParams) (*PostResponse, error) {
	updatedPost, err := s.repo.UpdatePost(ctx, sqlc.EditPostParams{
		PostTitle:   req.PostTitle,
		PostContent: req.PostContent,
		PostID: req.PostID,
	})
	if err != nil {
		return nil, err
	}
	return &PostResponse{
		PostID:      updatedPost.PostID,
		UserID:      updatedPost.UserID,
		PostTitle:   updatedPost.PostTitle,
		PostContent: updatedPost.PostContent,
	}, nil
}

func (s *service) GetAllPosts(ctx context.Context) ([]PostResponse, error) {
	posts, err := s.repo.GetAllPosts(ctx)
	if err != nil {
		return nil, err
	}
	return convertToPostResponses(posts), nil
}

func (s *service) GetPostsByUserID(ctx context.Context, userID int64) ([]PostResponse, error) {
	posts, err := s.repo.GetPostsByUserID(ctx, userID)
	if err != nil {
		return nil, err
	}
	return convertToPostResponses(posts), nil
}

func (s *service) GetPostByPostID(ctx context.Context, postID int64) (*PostResponse, error) {
	post, err := s.repo.GetPostByPostID(ctx, postID)
	if err != nil {
		return nil, err
	}
	return &PostResponse{
		PostID:      post.PostID,
		UserID:      post.UserID,
		PostTitle:   post.PostTitle,
		PostContent: post.PostContent,
	}, nil
}