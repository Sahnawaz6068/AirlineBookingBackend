/*
  Warnings:

  - You are about to drop the `airplane` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."airplane";

-- CreateTable
CREATE TABLE "public"."Airplane" (
    "id" SERIAL NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 200,

    CONSTRAINT "Airplane_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Airplan2" (
    "id" SERIAL NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 230,

    CONSTRAINT "Airplan2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airplane_modelNumber_key" ON "public"."Airplane"("modelNumber");
