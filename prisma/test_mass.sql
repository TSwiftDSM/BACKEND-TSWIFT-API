INSERT INTO
    testesQualidades(nomeTeste)
VALUES
('TESTE DE EMBALAGEM');

INSERT INTO
    testesQualidades(nomeTeste)
VALUES
('TESTE UMIDADE');

INSERT INTO
    testesQualidades(nomeTeste)
VALUES
('TESTE DE QUÍMICA');

INSERT INTO
    testesQualidades(nomeTeste)
VALUES
('TESTE DE FUNGOS');

INSERT INTO
    produtos(nomeProduto, unidade)
VALUES
('ARROZ', 'KG');

INSERT INTO
    produtos(nomeProduto, unidade)
VALUES
('FEIJÃO', 'KG');

INSERT INTO
    produtos(nomeProduto, unidade)
VALUES
('SOJA', 'KG');

INSERT INTO
    produtos(nomeProduto, unidade)
VALUES
('ÓLEO', 'LITRO');

INSERT INTO
    fornecedores(
        nomeFantasia,
        fornecedorCNPJ,
        razaoSocial,
        endereco,
        transportadora,
        fornecedor
    )
VALUES
(
        'Fazenda do Sol Nascente',
        '06.746.628/0001-17',
        'SOL NASCENTE',
        'Jardim Independente I',
        true,
        true
    );

INSERT INTO
    fornecedores(
        nomeFantasia,
        fornecedorCNPJ,
        razaoSocial,
        endereco,
        transportadora,
        fornecedor
    )
VALUES
(
        'Fazenda LTDA da Soja',
        '86.384.428/0001-09',
        'LTDA SOJA',
        'Rua Sargento Vasconcelos',
        true,
        true
    );

INSERT INTO
    fornecedores(
        nomeFantasia,
        fornecedorCNPJ,
        razaoSocial,
        endereco,
        transportadora,
        fornecedor
    )
VALUES
(
        'Fazenda LTDA Girassol',
        '82.476.614/0001-09',
        'LTDA SOJA',
        'Rua Galdino José de Bessa',
        true,
        true
    );

--
INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(1, 1);

INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(1, 2);

INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(1, 3);

INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(1, 4);

--
INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(2, 2);

INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(2, 3);

--
INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(3, 4);

INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(3, 3);

INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(3, 2);

INSERT INTO
    fornecedorProdutos(fornecedorId, produtoId)
VALUES
(3, 1);

-- ARROZ
INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(0, 1, 1);

INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(1, 2, 1);

INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(1, 4, 1);

-- FEIJÃO
INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(0, 1, 2);

INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(1, 3, 2);

-- SOJA
INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(1, 1, 3);

INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(1, 2, 3);

INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(1, 3, 3);

-- ÓLEO
INSERT INTO
    qualidadeProdutos(obrigatorio, testeQualidadeId, produtoId)
VALUES
(1, 1, 4);

-- 
INSERT INTO
    transportadorasFornecedores(fornecedorId, transportadoraId)
VALUES
(1, 1);

INSERT INTO
    transportadorasFornecedores(fornecedorId, transportadoraId)
VALUES
(2, 2);

INSERT INTO
    transportadorasFornecedores(fornecedorId, transportadoraId)
VALUES
(3, 3);

-- ENTREGA 1
select
    *
from
    entregas;

INSERT INTO
    entregas(
        tipoFrete,
        formaPagamento,
        nfe,
        numeroPedido,
        etapaEntrega,
        dataEntrega,
        fornecedorId,
        transportadoraId
    )
VALUES
('CIF', '6X', '12', '1', '', curdate(), 1, 1);

INSERT INTO
    entregaProdutos
VALUES
(1, NULL, 50, NULL, NULL, 1, 1);

INSERT INTO
    entregaProdutos
VALUES
(2, NULL, 50, NULL, NULL, 2, 1);

INSERT INTO
    entregaProdutos
VALUES
(3, NULL, 50, NULL, NULL, 4, 1);

-- ENTREGA 2
INSERT INTO
    entregas(
        tipoFrete,
        formaPagamento,
        nfe,
        numeroPedido,
        etapaEntrega,
        dataEntrega,
        fornecedorId,
        transportadoraId
    )
VALUES
('CIF', '6X', '13', '2', '', curdate(), 2, 2);

INSERT INTO
    entregaProdutos
VALUES
(4, NULL, 50, NULL, NULL, 3, 2);

-- ENTREGA 3
INSERT INTO
    entregas(
        tipoFrete,
        formaPagamento,
        nfe,
        numeroPedido,
        etapaEntrega,
        dataEntrega,
        fornecedorId,
        transportadoraId
    )
VALUES
('CIF', '6X', '14', '3', '', curdate(), 3, 3);

INSERT INTO
    entregaProdutos
VALUES
(5, NULL, 50, NULL, NULL, 3, 3);

INSERT INTO
    entregaProdutos
VALUES
(6, NULL, 70, NULL, NULL, 2, 3);

-- ENTREGA 4
INSERT INTO
    entregas(
        tipoFrete,
        formaPagamento,
        nfe,
        numeroPedido,
        etapaEntrega,
        dataEntrega,
        fornecedorId,
        transportadoraId
    )
VALUES
('CIF', '12X', '15', '4', '', curdate(), 3, 3);

INSERT INTO
    entregaProdutos
VALUES
(7, NULL, 50, NULL, NULL, 1, 4);

INSERT INTO
    entregaProdutos
VALUES
(8, NULL, 70, NULL, NULL, 2, 4);

INSERT INTO
    entregaProdutos
VALUES
(9, NULL, 60, NULL, NULL, 3, 4);

INSERT INTO
    entregaProdutos
VALUES
(10, NULL, 40, NULL, NULL, 4, 4);

-- ENTREGA 5
INSERT INTO
    entregas(
        tipoFrete,
        formaPagamento,
        nfe,
        numeroPedido,
        etapaEntrega,
        dataEntrega,
        fornecedorId,
        transportadoraId
    )
VALUES
('CIF', '6X', '16', '5', '', curdate(), 1, 1);

INSERT INTO
    entregaProdutos
VALUES
(11, NULL, 50, NULL, NULL, 2, 5);

INSERT INTO
    entregaProdutos
VALUES
(12, NULL, 10, NULL, NULL, 4, 5);

-- ENTREGA 6
INSERT INTO
    entregas(
        tipoFrete,
        formaPagamento,
        nfe,
        numeroPedido,
        etapaEntrega,
        dataEntrega,
        fornecedorId,
        transportadoraId
    )
VALUES
('CIF', '6X', '17', '6', '', curdate(), 2, 2);

INSERT INTO
    entregaProdutos
VALUES
(13, NULL, 50, NULL, NULL, 2, 6);

INSERT INTO
    entregaProdutos
VALUES
(14, NULL, 10, NULL, NULL, 3, 6);

-- USUARIOS
INSERT INTO
    tiposUsuarios
VALUES
(1, 'ADM');

INSERT INTO
    tiposUsuarios
VALUES
(2, 'GERENTE');

INSERT INTO
    tiposUsuarios
VALUES
(3, 'CONFERENTE');

INSERT INTO
    usuarios(
        nome,
        login,
        senha,
        cpf,
        matricula,
        dataNascimento,
        tipoUsuarioId
    )
VALUES
(
        'adm1',
        'TESTE1',
        '1234',
        '123',
        '1',
        curdate(),
        1
    );

INSERT INTO
    usuarios(
        nome,
        login,
        senha,
        cpf,
        matricula,
        dataNascimento,
        tipoUsuarioId
    )
VALUES
(
        'GERENTE1',
        'TESTE2',
        '1234',
        '1234',
        '2',
        curdate(),
        2
    );

INSERT INTO
    usuarios(
        nome,
        login,
        senha,
        cpf,
        matricula,
        dataNascimento,
        tipoUsuarioId
    )
VALUES
(
        'CONFERENTE1',
        'TESTE3',
        '1234',
        '12345',
        '3',
        curdate(),
        3
    );
    
INSERT INTO permissoes(descricao) 
VALUES ('PRODUTOS');
INSERT INTO permissoes(descricao) 
VALUES ('FORNECEDORES');
INSERT INTO permissoes(descricao) 
VALUES ('PEDIDOS');
INSERT INTO permissoes(descricao) 
VALUES ('COLABORADORES');
INSERT INTO permissoes(descricao) 
VALUES ('RECEBIMENTO');
INSERT INTO permissoes(descricao) 
VALUES ('REGRAS');
INSERT INTO permissoes(descricao) 
VALUES ('TRANSPORTADORA');	
INSERT INTO permissoes(descricao) 
VALUES ('RELATORIOS');	

INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(1,1);
INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(2,1);
INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(3,1);
INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(4,1);
INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(5,1);
INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(6,1);
INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(7,1);
INSERT INTO permissoesusuario(permissaoId, usuarioId)
VALUES(8,1);

INSERT INTO `tswift`.`regraquantitativa` (`id`, `porcentagem`) VALUES ('1', '5');
