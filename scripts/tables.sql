DROP TABLE IF EXISTS restaurants_user;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
	"user_id" SERIAL PRIMARY KEY,
	"username" VARCHAR(20) NOT NULL,
	"password" VARCHAR(36) NOT NULL
);

CREATE TABLE restaurants_user(
    "restaurant_user_id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "restaurants" JSONB,
    "date" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT "fk_restaurants_user_user"
            FOREIGN KEY("user_id")
            REFERENCES users("user_id")
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
);