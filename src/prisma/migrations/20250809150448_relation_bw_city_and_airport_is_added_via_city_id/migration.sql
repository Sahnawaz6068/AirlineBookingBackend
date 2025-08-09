/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address]` on the table `Airport` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Airport_name_key" ON "public"."Airport"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_code_key" ON "public"."Airport"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_address_key" ON "public"."Airport"("address");

-- AddForeignKey
ALTER TABLE "public"."Airport" ADD CONSTRAINT "Airport_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "public"."City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
