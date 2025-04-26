/*
  Warnings:

  - Made the column `hasShipped` on table `UnconfirmedGame` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UnconfirmedGame" ALTER COLUMN "hasShipped" SET NOT NULL;
