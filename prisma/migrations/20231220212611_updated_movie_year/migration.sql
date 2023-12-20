/*
  Warnings:

  - Added the required column `release_year` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "release_year",
ADD COLUMN     "release_year" INTEGER NOT NULL;
