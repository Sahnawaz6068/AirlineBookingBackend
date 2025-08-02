-- CreateTable
CREATE TABLE "public"."airplane" (
    "id" SERIAL NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 200,

    CONSTRAINT "airplane_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "airplane_modelNumber_key" ON "public"."airplane"("modelNumber");
