/*
  Warnings:

  - You are about to drop the column `supplierCNPJ` on the `suppliers` table. All the data in the column will be lost.
  - You are about to drop the `deliverySteps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `qualityTests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userTypes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[supplierCPJ]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actualWeight` to the `deliveriesProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `deliveriesProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `deliveriesProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplierCPJ` to the `suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_deliveryStepId_fkey`;

-- DropForeignKey
ALTER TABLE `disapprovalsDeliveries` DROP FOREIGN KEY `disapprovalsDeliveries_qualityTestId_fkey`;

-- DropForeignKey
ALTER TABLE `qualitiesProducts` DROP FOREIGN KEY `qualitiesProducts_qualityTestId_fkey`;

-- DropForeignKey
ALTER TABLE `statusDeliveries` DROP FOREIGN KEY `statusDeliveries_userId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_userTypeId_fkey`;

-- DropIndex
DROP INDEX `suppliers_supplierCNPJ_key` ON `suppliers`;

-- AlterTable
ALTER TABLE `deliveriesProducts` ADD COLUMN `actualWeight` DOUBLE NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `unit` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `disapprovalsDeliveries` MODIFY `qualityTestId` INTEGER NULL;

-- AlterTable
ALTER TABLE `qualitiesProducts` ADD COLUMN `mandatory` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `statusDeliveries` MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `suppliers` DROP COLUMN `supplierCNPJ`,
    ADD COLUMN `supplierCPJ` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `userTypeId` INTEGER NULL;

-- DropTable
DROP TABLE `deliverySteps`;

-- DropTable
DROP TABLE `qualityTests`;

-- DropTable
DROP TABLE `userTypes`;

-- CreateTable
CREATE TABLE `qualitiesTests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deliveriesSteps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stepName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usersTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `suppliers_supplierCPJ_key` ON `suppliers`(`supplierCPJ`);

-- AddForeignKey
ALTER TABLE `qualitiesProducts` ADD CONSTRAINT `qualitiesProducts_qualityTestId_fkey` FOREIGN KEY (`qualityTestId`) REFERENCES `qualitiesTests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_deliveryStepId_fkey` FOREIGN KEY (`deliveryStepId`) REFERENCES `deliveriesSteps`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disapprovalsDeliveries` ADD CONSTRAINT `disapprovalsDeliveries_qualityTestId_fkey` FOREIGN KEY (`qualityTestId`) REFERENCES `qualitiesTests`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_userTypeId_fkey` FOREIGN KEY (`userTypeId`) REFERENCES `usersTypes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `statusDeliveries` ADD CONSTRAINT `statusDeliveries_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
