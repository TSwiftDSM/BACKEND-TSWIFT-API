-- drop database Tswift;
create database Tswift;

use Tswift;

-- CreateTable
CREATE TABLE `suppliers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplierName` VARCHAR(191) NOT NULL,
    `supplierCPJ` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `suppliers_supplierCPJ_key`(`supplierCPJ`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- CreateTable
CREATE TABLE `qualitiesTests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;



-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- CreateTable
CREATE TABLE `qualitiesProducts` (
    `mandatory` BOOLEAN NOT NULL DEFAULT true,
    `qualityTestId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`qualityTestId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;



-- CreateTable
CREATE TABLE `suppliersProducts` (
    `idSupplier` INTEGER NOT NULL,
    `idProduct` INTEGER NOT NULL,

    PRIMARY KEY (`idProduct`, `idSupplier`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;



-- CreateTable
CREATE TABLE `shippingCompany` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameShippingCompany` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;




-- CreateTable
CREATE TABLE `deliveriesSteps` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stepName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;




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


-- CreateTable
CREATE TABLE `usersTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;



-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `userTypeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;



-- CreateTable
CREATE TABLE `statusDeliveries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `approved` BOOLEAN NOT NULL,
    `deliveryId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;



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

-- Inserts

INSERT INTO qualitiesTests VALUES(1, 'TESTE QUALIDADE 1');
INSERT INTO qualitiesTests VALUES(2, 'TESTE QUALIDADE 2');

INSERT INTO products VALUES(1,'PRODUTO 1');
INSERT INTO products VALUES(2,'PRODUTO 2');

INSERT INTO suppliers VALUES(1,'Fornecedor1','1');
INSERT INTO suppliers VALUES(2,'Fornecedor2','2');

INSERT INTO qualitiesProducts VALUES(1, 1, 1);
INSERT INTO qualitiesProducts VALUES(1, 2, 1);
INSERT INTO qualitiesProducts VALUES(1, 1, 2);

INSERT INTO shippingCompany VALUES(1,'TRANSPORTADORA 1');
INSERT INTO shippingCompany VALUES(2,'TRANSPORTADORA 2');

INSERT INTO deliveriesSteps VALUES(1,'RECEBIMENTO DO PRODUTO');
INSERT INTO deliveriesSteps VALUES(2,'QUANTITATIVA');
INSERT INTO deliveriesSteps VALUES(3,'QUALITATIVA');

INSERT INTO deliveries VALUES(1,'1123', 1, 1, 1);
INSERT INTO deliveries VALUES(2,'11241', 2, 1, 1);

INSERT INTO deliveriesProducts VALUES(1,20.4, 1,1);
INSERT INTO deliveriesProducts VALUES(2,1, 2,1);
INSERT INTO deliveriesProducts VALUES(3,1, 2,2);

INSERT INTO suppliersProducts VALUES(1,1);
INSERT INTO suppliersProducts VALUES(1,2);
INSERT INTO suppliersProducts VALUES(2,2);



INSERT INTO usersTypes VALUES(1,'ADM');
INSERT INTO usersTypes VALUES(2,'GERENTE');
INSERT INTO usersTypes VALUES(3,'CONFERENTE');

INSERT INTO users VALUES(1,'adm1', 'TESTE1', '1234', 1);
INSERT INTO users VALUES(2,'GERENTE1', 'TESTE2', '1234',  2);
INSERT INTO users VALUES(3,'CONFERENTE1', 'TESTE3', '1234', 3);

INSERT INTO statusDeliveries VALUES(NULL, 1, 1, 1);
INSERT INTO statusDeliveries VALUES(NULL, 2, 2, 1);

