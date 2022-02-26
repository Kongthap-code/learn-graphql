-- CreateTable
CREATE TABLE "User" (
    "users_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("users_id")
);
