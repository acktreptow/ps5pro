/*
  Warnings:

  - Made the column `hasShipped` on table `ConfirmedGame` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ConfirmedGame" ALTER COLUMN "hasShipped" SET NOT NULL;
