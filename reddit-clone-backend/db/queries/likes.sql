-- name: CreateLike :one
INSERT INTO likes (post_id, user_id)
VALUES ($1, $2)
RETURNING post_id, user_id;

-- name: GetAllLikes :many
SELECT * FROM likes;

-- name: GetAllLikesByUserID :many
SELECT * FROM likes WHERE user_id = $1;