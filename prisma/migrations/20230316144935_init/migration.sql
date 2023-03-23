-- CreateTable
CREATE TABLE `suppliers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplierName` VARCHAR(191) NOT NULL,
    `supplierCPJ` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `suppliers_supplierCPJ_key`(`supplierCPJ`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO suppliers VALUES('Fornecedor1','1');
INSERT INTO suppliers VALUES('Fornecedor2','2');

-- CreateTable
CREATE TABLE `qualitiesTests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO qualitiesTests VALUES('TESTE QUALIDADE 1');
INSERT INTO qualitiesTests VALUES('TESTE QUALIDADE 2');

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO products VALUES('PRODUTO 1');
INSERT INTO products VALUES('PRODUTO 2');

-- CreateTable
CREATE TABLE `qualitiesProducts` (
    `mandatory` BOOLEAN NOT NULL DEFAULT true,
    `qualityTestId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`qualityTestId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO qualitiesProducts VALUES(1, 1, 1);
INSERT INTO qualitiesProducts VALUES(1, 2, 1);
INSERT INTO qualitiesProducts VALUES(1, 1, 2);

-- CreateTable
CREATE TABLE `suppliersProducts` (
    `idSupplier` INTEGER NOT NULL,
    `idProduct` INTEGER NOT NULL,

    PRIMARY KEY (`idProduct`, `idSupplier`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO suppliersProducts VALUES(1,1);
INSERT INTO suppliersProducts VALUES(1,2);
INSERT INTO suppliersProducts VALUES(2,2);


-- CreateTable
CREATE TABLE `shippingCompany` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameShippingCompany` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO shippingCompany VALUES('TRANSPORTADORA 1');
INSERT INTO shippingCompany VALUES('TRANSPORTADORA 2');


-- CreateTable
CREATE TABLE `deliveriesSteps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stepName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO deliveriesSteps VALUES('RECEBIMENTO DO PRODUTO');
INSERT INTO deliveriesSteps VALUES('QUANTITATIVA');
INSERT INTO deliveriesSteps VALUES('QUALITATIVA');


-- CreateTable
CREATE TABLE `deliveries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nfe` VARCHAR(191) NOT NULL,
    `idSupplier` INTEGER NOT NULL,
    `idShippingCompany` INTEGER NOT NULL,
    `deliveryStepId` INTEGER NOT NULL,

    UNIQUE INDEX `deliveries_nfe_key`(`nfe`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO deliveries VALUES('1123', 1, 1, 1);
INSERT INTO deliveries VALUES('1123', 2, 1, 1);

-- CreateTable
CREATE TABLE `disapprovalsDeliveries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `motivo` VARCHAR(191) NOT NULL,
    `qualityTestId` INTEGER NOT NULL,
    `deliveryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `deliveriesProducts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `predictedWeight` DOUBLE NOT NULL,
    `idProduct` INTEGER NOT NULL,
    `idDelivery` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO deliveriesProducts VALUES(20.4, 1,1);
INSERT INTO deliveriesProducts VALUES(1, 2,1);
INSERT INTO deliveriesProducts VALUES(1, 2,2);

-- CreateTable
CREATE TABLE `usersTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO usersTypes VALUES('ADM');
INSERT INTO usersTypes VALUES('GERENTE');
INSERT INTO usersTypes VALUES('CONFERENTE');


-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `userTypeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO users VALUES('adm1', 'TESTE1', '1234', '1234', 1)
INSERT INTO users VALUES('GERENTE1', 'TESTE2', '1234', '1234', 2)
INSERT INTO users VALUES('CONFERENTE1', 'TESTE3', '1234', '1234', 3)

-- CreateTable
CREATE TABLE `statusDeliveries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `approved` BOOLEAN NOT NULL,
    `deliveryId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO statusDeliveries VALUES(NULL, 1, 1, 1)
INSERT INTO statusDeliveries VALUES(NULL, 2, 2, 1)

-- AddForeignKey
ALTER TABLE `qualitiesProducts` ADD CONSTRAINT `qualitiesProducts_qualityTestId_fkey` FOREIGN KEY (`qualityTestId`) REFERENCES `qualitiesTests`(`id`)  ;

-- AddForeignKey
ALTER TABLE `qualitiesProducts` ADD CONSTRAINT `qualitiesProducts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`)  ;

-- AddForeignKey
ALTER TABLE `suppliersProducts` ADD CONSTRAINT `suppliersProducts_idSupplier_fkey` FOREIGN KEY (`idSupplier`) REFERENCES `suppliers`(`id`)  ;

-- AddForeignKey
ALTER TABLE `suppliersProducts` ADD CONSTRAINT `suppliersProducts_idProduct_fkey` FOREIGN KEY (`idProduct`) REFERENCES `products`(`id`)  ;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_idSupplier_fkey` FOREIGN KEY (`idSupplier`) REFERENCES `suppliers`(`id`)  ;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_idShippingCompany_fkey` FOREIGN KEY (`idShippingCompany`) REFERENCES `shippingCompany`(`id`)  ;

-- AddForeignKey
ALTER TABLE `deliveries` ADD CONSTRAINT `deliveries_deliveryStepId_fkey` FOREIGN KEY (`deliveryStepId`) REFERENCES `deliveriesSteps`(`id`)  ;

-- AddForeignKey
ALTER TABLE `disapprovalsDeliveries` ADD CONSTRAINT `disapprovalsDeliveries_qualityTestId_fkey` FOREIGN KEY (`qualityTestId`) REFERENCES `qualitiesTests`(`id`)  ;

-- AddForeignKey
ALTER TABLE `disapprovalsDeliveries` ADD CONSTRAINT `disapprovalsDeliveries_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `deliveries`(`id`)  ;

-- AddForeignKey
ALTER TABLE `deliveriesProducts` ADD CONSTRAINT `deliveriesProducts_idProduct_fkey` FOREIGN KEY (`idProduct`) REFERENCES `products`(`id`)  ;

-- AddForeignKey
ALTER TABLE `deliveriesProducts` ADD CONSTRAINT `deliveriesProducts_idDelivery_fkey` FOREIGN KEY (`idDelivery`) REFERENCES `deliveries`(`id`)  ;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_userTypeId_fkey` FOREIGN KEY (`userTypeId`) REFERENCES `usersTypes`(`id`)  ;

-- AddForeignKey
ALTER TABLE `statusDeliveries` ADD CONSTRAINT `statusDeliveries_deliveryId_fkey` FOREIGN KEY (`deliveryId`) REFERENCES `deliveries`(`id`)  ;

-- AddForeignKey
ALTER TABLE `statusDeliveries` ADD CONSTRAINT `statusDeliveries_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`)  ;


