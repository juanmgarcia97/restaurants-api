DROP TABLE IF EXISTS users;

CREATE TABLE users(
	"user_id" SERIAL PRIMARY KEY,
	"username" VARCHAR(20) NOT NULL,
	"password" VARCHAR(15) NOT NULL
);