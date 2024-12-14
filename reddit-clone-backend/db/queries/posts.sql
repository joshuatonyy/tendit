-- name: CreatePost :one
INSERT INTO posts (user_id, post_title, post_content)
VALUES ($1, $2, $3)
RETURNING post_id;

-- name: EditPost :one
UPDATE posts 
SET post_title = COALESCE($1, post_title), post_content = COALESCE($2, post_content)
WHERE post_id = $3
RETURNING post_id;

-- name: GetAllPost :many
SELECT * FROM posts;

-- name: GetAllPostByUserID :many
SELECT * FROM posts WHERE user_id = $1;

-- name: GetPostByPostID :one
SELECT * FROM posts WHERE post_id = $1;