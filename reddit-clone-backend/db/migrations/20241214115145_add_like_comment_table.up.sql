CREATE TABLE "likes" (
    "user_id" bigserial NOT NULL,
    "post_id" bigserial NOT NULL,
    PRIMARY KEY ("user_id", "post_id"),
    FOREIGN KEY ("user_id") REFERENCES users("id") ON DELETE CASCADE,
    FOREIGN KEY ("post_id") REFERENCES posts("post_id") ON DELETE CASCADE
);

CREATE TABLE "comments" (
    "comment_id" bigserial PRIMARY KEY,
    "post_id" bigserial NOT NULL,
    "user_id" bigserial NOT NULL,
    "comment_content" varchar NOT NULL,
    
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);