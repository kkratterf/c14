/*
  Warnings:

  - Made the column `countryid` on table `Location` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_countryid_fkey";

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "countryid" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_countryid_fkey" FOREIGN KEY ("countryid") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
