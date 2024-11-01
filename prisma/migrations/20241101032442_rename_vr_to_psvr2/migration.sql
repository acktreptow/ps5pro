/*
  Warnings:

  - You are about to drop the column `vr` on the `ConfirmedGame` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ConfirmedGame" DROP COLUMN "vr",
ADD COLUMN     "psvr2" BOOLEAN NOT NULL DEFAULT false;
