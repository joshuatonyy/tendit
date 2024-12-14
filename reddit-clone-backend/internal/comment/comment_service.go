package comment

import (
	"context"
	"reddit-clone-backend/db/sqlc"
)

type service struct {
	repo Repository
}

func NewService(repo Repository) Service {
	return &service{
		repo: repo,
	}
}

func (s *service) CreateComment(c context.Context, req *sqlc.CreateCommentParams) (*int64, error) {
	newCommentID, err := s.repo.CreateComment(c, sqlc.CreateCommentParams{
		PostID: req.PostID,
		UserID: req.UserID,
		CommentContent: req.CommentContent,
	})
	if err != nil {
		return nil, err
	}
	return newCommentID, nil
}

func (s *service) GetAllComments(c context.Context) ([]CommentResponse, error) {
	comments, err := s.repo.GetAllComments(c)
	if err != nil {
		return nil, err
	}
	return convertToCommentResponse(comments), nil
}