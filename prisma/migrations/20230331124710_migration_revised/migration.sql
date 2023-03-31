/*
  Warnings:

  - You are about to drop the column `unidade` on the `entregaprodutos` table. All the data in the column will be lost.
  - You are about to drop the column `tranportadoraId` on the `entregas` table. All the data in the column will be lost.
  - You are about to drop the column `Endereco` on the `fornecedores` table. All the data in the column will be lost.
  - You are about to drop the column `TransportadoraPropria` on the `fornecedores` table. All the data in the column will be lost.
  - You are about to drop the `transportadoras` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fornecedorId,transportadoraId]` on the table `transportadorasFornecedores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endereco` to the `fornecedores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fornecedor` to the `fornecedores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transportadora` to the `fornecedores` table without a default value. This is not possible if the table is not empty.
  - Made the column `fornecedorId` on table `transportadorasfornecedores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `transportadoraId` on table `transportadorasfornecedores` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `entregas` DROP FOREIGN KEY `entregas_tranportadoraId_fkey`;

-- DropForeignKey
ALTER TABLE `transportadorasfornecedores` DROP FOREIGN KEY `transportadorasFornecedores_fornecedorId_fkey`;

-- DropForeignKey
ALTER TABLE `transportadorasfornecedores` DROP FOREIGN KEY `transportadorasFornecedores_transportadoraId_fkey`;

-- AlterTable
ALTER TABLE `entregaprodutos` DROP COLUMN `unidade`;

-- AlterTable
ALTER TABLE `entregas` DROP COLUMN `tranportadoraId`,
    ADD COLUMN `transportadoraId` INTEGER NULL;

-- AlterTable
ALTER TABLE `fornecedores` DROP COLUMN `Endereco`,
    DROP COLUMN `TransportadoraPropria`,
    ADD COLUMN `endereco` VARCHAR(191) NOT NULL,
    ADD COLUMN `fornecedor` BOOLEAN NOT NULL,
    ADD COLUMN `transportadora` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `produtos` ADD COLUMN `unidade` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `transportadorasfornecedores` MODIFY `fornecedorId` INTEGER NOT NULL,
    MODIFY `transportadoraId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `transportadoras`;

-- CreateIndex
CREATE UNIQUE INDEX `transportadorasFornecedores_fornecedorId_transportadoraId_key` ON `transportadorasFornecedores`(`fornecedorId`, `transportadoraId`);

-- AddForeignKey
ALTER TABLE `transportadorasFornecedores` ADD CONSTRAINT `transportadorasFornecedores_fornecedorId_fkey` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transportadorasFornecedores` ADD CONSTRAINT `transportadorasFornecedores_transportadoraId_fkey` FOREIGN KEY (`transportadoraId`) REFERENCES `fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregas` ADD CONSTRAINT `entregas_transportadoraId_fkey` FOREIGN KEY (`transportadoraId`) REFERENCES `transportadorasFornecedores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
