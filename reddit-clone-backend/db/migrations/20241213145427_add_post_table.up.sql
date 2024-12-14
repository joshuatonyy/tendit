CREATE TABLE "posts" (
    "post_id" bigserial PRIMARY KEY,
    "user_id" bigserial NOT NULL,
    "post_title" varchar NOT NULL,
    "post_content" varchar,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)