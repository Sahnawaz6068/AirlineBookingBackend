-- CreateTable
CREATE TABLE "public"."City" (
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "public"."City"("name");
