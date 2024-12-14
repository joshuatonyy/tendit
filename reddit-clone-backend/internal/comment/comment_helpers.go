package comment

import "reddit-clone-backend/db/sqlc"

func convertToCommentResponse(comments []sqlc.Comment) []CommentResponse {
	responses := make([]CommentResponse, len(comments))
	for i, comment := range comments {
		responses[i] = CommentResponse{
			CommentID: comment.CommentID,
			PostID: comment.PostID,
			UserID: comment.UserID,
			CommentContent: comment.CommentContent,
		}
	}
	return responses
}