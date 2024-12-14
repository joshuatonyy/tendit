-- name: CreateComment :one
INSERT INTO comments (post_id, user_id, comment_content)
VALUES ($1, $2, $3)
RETURNING post_id;

-- name: GetAllComments :many
SELECT * FROM comments;