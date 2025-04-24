/*
  Warnings:

  - Made the column `hasShipped` on table `DetailedGame` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "DetailedGame" ALTER COLUMN "hasShipped" SET NOT NULL;
