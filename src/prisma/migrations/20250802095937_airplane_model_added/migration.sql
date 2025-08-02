/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE "public".user_id_seq;
ALTER TABLE "public"."User" ALTER COLUMN "id" SET DEFAULT nextval('"public".user_id_seq'),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE "public".user_id_seq OWNED BY "public"."User"."id";

-- DropIndex
DROP INDEX "public"."User_id_key";

-- CreateTable
CREATE TABLE "public"."Airplane" (
    "id" SERIAL NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 200,

    CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airplane_modelNumber_key" ON "public"."Airplane"("modelNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
