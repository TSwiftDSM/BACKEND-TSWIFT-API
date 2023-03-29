/*
  Warnings:

  - Added the required column `specification` to the `deliveriesProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `deliveriesProducts` ADD COLUMN `specification` VARCHAR(191) NOT NULL;
