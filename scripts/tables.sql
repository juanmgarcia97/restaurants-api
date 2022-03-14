DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
	"user_id" SERIAL PRIMARY KEY,
	"username" VARCHAR(20) NOT NULL,
	"password" VARCHAR(36) NOT NULL
);

CREATE TABLE restaurants(
    "restaurant_id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25) NOT NULL,
    "rating" NUMERIC(1,1) NOT NULL,
    "address" VARCHAR(50) NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "fk_restaurant_user"
            FOREIGN KEY("user_id")
            REFERENCES users("user_id")
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
);