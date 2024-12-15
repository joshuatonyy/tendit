package post

import (
	"database/sql"
	"reddit-clone-backend/db/sqlc"
)

func getNullableString(s *string) sql.NullString {
	if s == nil {
		return sql.NullString{Valid: false}
	}
	return sql.NullString{String: *s, Valid: true}
}

func getStringPointer(ns sql.NullString) *string {
	if ns.Valid {
		return &ns.String
	}
	return nil
}

func convertToPostResponses(posts []sqlc.Post) []PostResponse {
	responses := make([]PostResponse, len(posts))
	for i, post := range posts {
		responses[i] = PostResponse{
			PostID:      post.PostID,
			UserID:      post.UserID,
			PostTitle:   post.PostTitle,
			PostContent: post.PostContent,
		}
	}
	return responses
}
