/*
  Warnings:

  - Made the column `publisher` on table `ConfirmedGame` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ConfirmedGame" ALTER COLUMN "publisher" SET NOT NULL;
