-- CreateTable
CREATE TABLE `fornecedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeFantasia` VARCHAR(191) NOT NULL,
    `fornecedorCNPJ` VARCHAR(191) NOT NULL,
    `razaoSocial` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `transportadora` BOOLEAN NOT NULL,
    `fornecedor` BOOLEAN NOT NULL,

    UNIQUE INDEX `fornecedores_fornecedorCNPJ_key`(`fornecedorCNPJ`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transportadorasFornecedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fornecedorId` INTEGER NOT NULL,
    `transportadoraId` INTEGER NOT NULL,

    UNIQUE INDEX `transportadorasFornecedores_fornecedorId_transportadoraId_key`(`fornecedorId`, `transportadoraId`),
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
    `unidade` VARCHAR(191) NULL,

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
CREATE TABLE `entregas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nfe` VARCHAR(191) NOT NULL,
    `numeroPedido` VARCHAR(191) NOT NULL,
    `tipoEntrega` VARCHAR(191) NOT NULL,
    `fornecedorId` INTEGER NULL,
    `etapaEntrega` VARCHAR(191) NULL,
    `transportadoraId` INTEGER NULL,

    UNIQUE INDEX `entregas_nfe_key`(`nfe`),
    UNIQUE INDEX `entregas_numeroPedido_key`(`numeroPedido`),
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
    `especificacao` VARCHAR(191) NULL,
    `quantidade` INTEGER NULL,
    `pesoReal` DOUBLE NULL,
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
    `aprovado` BOOLEAN NOT NULL,
    `etapaEntrega` VARCHAR(191) NULL,
    `entregaId` INTEGER NOT NULL,
    `usuarioId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transportadorasFornecedores` ADD CONSTRAINT `transportadorasFornecedores_fornecedorId_fkey` FOREIGN KEY (`fornecedorId`) REFERENCES `fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transportadorasFornecedores` ADD CONSTRAINT `transportadorasFornecedores_transportadoraId_fkey` FOREIGN KEY (`transportadoraId`) REFERENCES `fornecedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `entregas` ADD CONSTRAINT `entregas_transportadoraId_fkey` FOREIGN KEY (`transportadoraId`) REFERENCES `transportadorasFornecedores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
