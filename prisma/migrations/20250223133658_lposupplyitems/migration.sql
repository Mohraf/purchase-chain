/*
  Warnings:

  - A unique constraint covering the columns `[lpoNumber]` on the table `Lpo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lpo_lpoNumber_key" ON "Lpo"("lpoNumber");
