-- CreateTable
CREATE TABLE `fornecedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeFantasia` VARCHAR(191) NOT NULL,
    `fornecedorCNPJ` VARCHAR(191) NOT NULL,
    `razaoSocial` VARCHAR(191) NOT NULL,
    `Endereco` VARCHAR(191) NOT NULL,
    `TransportadoraPropria` BOOLEAN NOT NULL,

    UNIQUE INDEX `fornecedores_fornecedorCNPJ_key`(`fornecedorCNPJ`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transportadoras` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeFantasia` VARCHAR(191) NOT NULL,
    `fornecedorCNPJ` VARCHAR(191) NOT NULL,
    `razaoSocial` VARCHAR(191) NOT NULL,
    `Endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `transportadoras_fornecedorCNPJ_key`(`fornecedorCNPJ`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transportadorasFornecedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fornecedorId` INTEGER NULL,
    `transportadoraId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testesQualidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeTeste` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeProduto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `qualidadeProdutos` (
    `obrigatorio` BOOLEAN NOT NULL DEFAULT true,
    `testeQualdidaeId` INTEGER NOT NULL,
    `produtoId` INTEGER NOT NULL,

    PRIMARY KEY (`testeQualdidaeId`, `produtoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fornecedorProdutos` (
    `fornecedorId` INTEGER NOT NULL,
    `produtoId` INTEGER NOT NULL,

    PRIMARY KEY (`produtoId`, `fornecedorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etapaEntrega` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeEtapa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entregas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nfe` VARCHAR(191) NOT NULL,
    `tipoEntrega` VARCHAR(191) NOT NULL,
    `fornecedorId` INTEGER NULL,
    `tranportadoraId` INTEGER NULL,
    `etapaEntregaId` INTEGER NULL,

    UNIQUE INDEX `entregas_nfe_key`(`nfe`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entregasDesaprovadas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `motivo` VARCHAR(191) NOT NULL,
    `testeQualidadeId` INTEGER NULL,
    `entregaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entregaProdutos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pesoPrevisto` DOUBLE NULL,
    `pesoAtual` DOUBLE NULL,
    `unidade` VARCHAR(191) NULL,
    `quantidade` INTEGER NULL,
    `produtoId` INTEGER NOT NULL,
    `EntregaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tiposUsuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoUsuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `tipoUsuarioId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statusEntregas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `approved` BOOLEAN NOT NULL,
    `entregaId` INTEGER NOT NULL,
    `usuarioId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transportadorasFornecedores` ADD CONSTRAINT `transportadorasFornecedores_fornecedorId_fkey` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transportadorasFornecedores` ADD CONSTRAINT `transportadorasFornecedores_transportadoraId_fkey` FOREIGN KEY (`transportadoraId`) REFERENCES `transportadoras`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `qualidadeProdutos` ADD CONSTRAINT `qualidadeProdutos_testeQualdidaeId_fkey` FOREIGN KEY (`testeQualdidaeId`) REFERENCES `testesQualidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `qualidadeProdutos` ADD CONSTRAINT `qualidadeProdutos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fornecedorProdutos` ADD CONSTRAINT `fornecedorProdutos_fornecedorId_fkey` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fornecedorProdutos` ADD CONSTRAINT `fornecedorProdutos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregas` ADD CONSTRAINT `entregas_fornecedorId_fkey` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregas` ADD CONSTRAINT `entregas_tranportadoraId_fkey` FOREIGN KEY (`tranportadoraId`) REFERENCES `transportadoras`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregas` ADD CONSTRAINT `entregas_etapaEntregaId_fkey` FOREIGN KEY (`etapaEntregaId`) REFERENCES `etapaEntrega`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregasDesaprovadas` ADD CONSTRAINT `entregasDesaprovadas_testeQualidadeId_fkey` FOREIGN KEY (`testeQualidadeId`) REFERENCES `testesQualidades`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregasDesaprovadas` ADD CONSTRAINT `entregasDesaprovadas_entregaId_fkey` FOREIGN KEY (`entregaId`) REFERENCES `entregas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregaProdutos` ADD CONSTRAINT `entregaProdutos_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produtos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `entregaProdutos` ADD CONSTRAINT `entregaProdutos_EntregaId_fkey` FOREIGN KEY (`EntregaId`) REFERENCES `entregas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tiposUsuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `statusEntregas` ADD CONSTRAINT `statusEntregas_entregaId_fkey` FOREIGN KEY (`entregaId`) REFERENCES `entregas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `statusEntregas` ADD CONSTRAINT `statusEntregas_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- Inserts

INSERT INTO testesQualidades VALUES(1, 'TESTE QUALIDADE 1');
INSERT INTO testesQualidades VALUES(2, 'TESTE QUALIDADE 2');

INSERT INTO produtos VALUES(1,'PRODUTO 1');
INSERT INTO produtos VALUES(2,'PRODUTO 2');

INSERT INTO fornecedores VALUES(1,'Fornecedor1','1', 'Fornecedor1', 'Rua dos Bobos', true);
INSERT INTO fornecedores VALUES(2,'Fornecedor2','2', 'Fornecedor2', 'Rua dos Bobos', true);

INSERT INTO qualidadeProdutos VALUES(1, 1, 1);
INSERT INTO qualidadeProdutos VALUES(1, 2, 1);
INSERT INTO qualidadeProdutos VALUES(1, 1, 2);

INSERT INTO transportadoras VALUES(1,'TRANSPORTADORA 1', '123.123.132.4','TRASNPORTADORA1', 'RUA DOS BOBOS 01');
INSERT INTO transportadoras VALUES(2,'TRANSPORTADORA 2', '123.123','TRASNPORTADORA 2', 'RUA DOS BOBOS 02');

INSERT INTO etapaEntrega VALUES(1,'RECEBIMENTO DO PRODUTO');
INSERT INTO etapaEntrega VALUES(2,'QUANTITATIVA');
INSERT INTO etapaEntrega VALUES(3,'QUALITATIVA');

INSERT INTO entregas VALUES(1,'1123', 'cif', 1, 1, 1);
INSERT INTO entregas VALUES(2,'11241', 'cif', 2, 1, 1);

INSERT INTO entregaProdutos VALUES(1,20.4, 50, 'Kg', 20, 1,1);
INSERT INTO entregaProdutos VALUES(2,100, 50, 'Kg', 40,2,1);
INSERT INTO entregaProdutos VALUES(3, 50, 50, 'Kg', 30,2,2);

INSERT INTO fornecedorProdutos VALUES(1,1);
INSERT INTO fornecedorProdutos VALUES(1,2);
INSERT INTO fornecedorProdutos VALUES(2,2);

INSERT INTO tiposUsuarios VALUES(1,'ADM');
INSERT INTO tiposUsuarios VALUES(2,'GERENTE');
INSERT INTO tiposUsuarios VALUES(3,'CONFERENTE');

INSERT INTO usuarios VALUES(1,'adm1', 'TESTE1', '1234', '123', curdate(),1);
INSERT INTO usuarios VALUES(2,'GERENTE1', 'TESTE2', '1234', '1234', curdate() ,2);
INSERT INTO usuarios VALUES(3,'CONFERENTE1', 'TESTE3', '1234', '12345', curdate(),3);

INSERT INTO statusentregas VALUES(NULL, 1, 1, 1);
INSERT INTO statusentregas VALUES(NULL, 2, 2, 1);