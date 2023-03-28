CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (255) NOT NULL,
    "last_name" VARCHAR (255) NOT NULL,
    "email" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (1024) NOT NULL,
	"profile_image" VARCHAR(1042) DEFAULT 'images/profile-image.jpeg'
    "authLevel" VARCHAR (255) DEFAULT 'USER'
);

CREATE TABLE "catagories" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "users"(id) ON DELETE CASCADE,
    "catagory_name" VARCHAR (255) NOT NULL,
    "type" ENUM ('BILL', 'GOAL') NOT NULL,
    "amount" INTEGER,
    "date" DATE DEFAULT CURRENT_DATE,
);

CREATE TABLE "items" (
    "id" SERIAL PRIMARY KEY,
    "category_id" INTEGER REFERENCES "categories"(id) ON DELETE CASCADE,
    "place_name" VARCHAR (255),
    "amount" INTEGER NOT NULL,
    "date" DATE DEFAULT CURRENT_DATE,
);
