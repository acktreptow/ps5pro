/*
  Warnings:

  - Made the column `publisher` on table `DetailedGame` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "DetailedGame" ALTER COLUMN "publisher" SET NOT NULL;
