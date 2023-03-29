-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_deliveryStepId_fkey`;

-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_idShippingCompany_fkey`;

-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `deliveries_idSupplier_fkey`;

-- AlterTable
ALTER TABLE `deliveries` MODIFY `idSupplier` INTEGER NULL,
    MODIFY `idShippingCompany` INTEGER NULL,
    MODIFY `deliveryStepId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_idSupplier_fkey` FOREIGN KEY (`idSupplier`) REFERENCES `suppliers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_idShippingCompany_fkey` FOREIGN KEY (`idShippingCompany`) REFERENCES `shippingCompany`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_deliveryStepId_fkey` FOREIGN KEY (`deliveryStepId`) REFERENCES `deliverySteps`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
