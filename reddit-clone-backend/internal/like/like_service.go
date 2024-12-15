package like

import (
	"context"
	"reddit-clone-backend/db/sqlc"
)

type service struct {
	repo Repository
}

func NewService(repo Repository) Service {
	return &service{repo: repo}
}

func (s *service) CreateLike(ctx context.Context, postID int64, userID int64) (*sqlc.Like, error) {
	newLike, err := s.repo.CreateLike(ctx, *&sqlc.CreateLikeParams{
		PostID: postID,
		UserID: userID,
	})
	if err != nil {
		return nil, err
	}

	return newLike, nil
}

func (s *service) GetAllLikes(ctx context.Context) ([]sqlc.Like, error) {
	likes, err := s.repo.GetAllLikes(ctx)
	if err != nil {
		return nil, err
	}

	return likes, nil
}

func (s *service) GetAllLikesByUserID(ctx context.Context, userID int64) ([]sqlc.Like, error) {
	likes, err := s.repo.GetAllLikesByUserID(ctx, userID)
	if err != nil {
		return nil, err
	}
	return likes, nil
}
