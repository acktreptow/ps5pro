/*
  Warnings:

  - A unique constraint covering the columns `[urlPath]` on the table `DetailedGame` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DetailedGame_urlPath_key" ON "DetailedGame"("urlPath");
