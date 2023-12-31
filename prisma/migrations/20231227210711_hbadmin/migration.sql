-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('USER', 'DOCTOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "RoleType" NOT NULL DEFAULT 'USER',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
