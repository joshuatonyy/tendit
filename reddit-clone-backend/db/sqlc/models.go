// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0

package sqlc

type Comment struct {
	CommentID      int64  `json:"comment_id"`
	PostID         int64  `json:"post_id"`
	UserID         int64  `json:"user_id"`
	CommentContent string `json:"comment_content"`
}

type Like struct {
	UserID int64 `json:"user_id"`
	PostID int64 `json:"post_id"`
}

type Post struct {
	PostID      int64  `json:"post_id"`
	UserID      int64  `json:"user_id"`
	PostTitle   string `json:"post_title"`
	PostContent string `json:"post_content"`
}

type User struct {
	ID       int64  `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
