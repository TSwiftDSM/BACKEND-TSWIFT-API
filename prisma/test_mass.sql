INSERT INTO testesQualidades VALUES(1, 'TESTE DE EMBALAGEM');
INSERT INTO testesQualidades VALUES(2, 'TESTE UMIDADE');
INSERT INTO testesQualidades VALUES(3, 'TESTE DE QUÍMICA');
INSERT INTO testesQualidades VALUES(4, 'TESTE DE FUNGOS');

INSERT INTO produtos VALUES(1,'ARROZ', 'KG');
INSERT INTO produtos VALUES(2,'FEIJÃO', 'KG');
INSERT INTO produtos VALUES(3,'SOJA', 'KG');
INSERT INTO produtos VALUES(4,'ÓLEO', 'LITRO');


INSERT INTO fornecedores VALUES(1,'Fazenda do Sol Nascente','06.746.628/0001-17', 'SOL NASCENTE', 'Jardim Independente I', true, true);
INSERT INTO fornecedores VALUES(2,'Fazenda LTDA da Soja','86.384.428/0001-09', 'LTDA SOJA', 'Rua Sargento Vasconcelos', true, true);
INSERT INTO fornecedores VALUES(3,'Fazenda LTDA Girassol','82.476.614/0001-09', 'LTDA SOJA', 'Rua Galdino José de Bessa', true, true);

--

INSERT INTO fornecedorProdutos VALUES(1,1);
INSERT INTO fornecedorProdutos VALUES(1,2);
INSERT INTO fornecedorProdutos VALUES(1,3);
INSERT INTO fornecedorProdutos VALUES(1,4);

--

INSERT INTO fornecedorProdutos VALUES(2,2);
INSERT INTO fornecedorProdutos VALUES(2,3);

--

INSERT INTO fornecedorProdutos VALUES(3,4);
INSERT INTO fornecedorProdutos VALUES(3,3);
INSERT INTO fornecedorProdutos VALUES(3,2);
INSERT INTO fornecedorProdutos VALUES(3,1);

-- ARROZ

INSERT INTO qualidadeProdutos VALUES(0, 1, 1);
INSERT INTO qualidadeProdutos VALUES(1, 2, 1);
INSERT INTO qualidadeProdutos VALUES(1, 4, 1);

-- FEIJÃO

INSERT INTO qualidadeProdutos VALUES(0, 1, 2);
INSERT INTO qualidadeProdutos VALUES(1, 3, 2);

-- SOJA

INSERT INTO qualidadeProdutos VALUES(1, 1, 3);
INSERT INTO qualidadeProdutos VALUES(1, 2, 3);
INSERT INTO qualidadeProdutos VALUES(1, 3, 3);

-- ÓLEO

INSERT INTO qualidadeProdutos VALUES(1, 1, 4);

-- 

INSERT INTO transportadorasFornecedores VALUES(1,1, 1);
INSERT INTO transportadorasFornecedores VALUES(2,2,2);
INSERT INTO transportadorasFornecedores VALUES(3,3,3);

-- ENTREGA 1

INSERT INTO entregas VALUES(1,'12','1', 'CIF' , '6X', '',curdate(), 1, 1);

INSERT INTO entregaProdutos VALUES(1,NULL, 50, NULL, NULL, 1,1);
INSERT INTO entregaProdutos VALUES(2,NULL, 50, NULL, NULL,2,1);
INSERT INTO entregaProdutos VALUES(3,NULL, 50, NULL, NULL,4,1);

-- ENTREGA 2

INSERT INTO entregas VALUES(2,'13','2', 'CIF', '6X', '',curdate(), 2, 2);

INSERT INTO entregaProdutos VALUES(4, NULL, 50, NULL, NULL, 3,2);

-- ENTREGA 3

INSERT INTO entregas VALUES(3,'14','3', 'CIF' , '6X', '',curdate(), 3, 3);

INSERT INTO entregaProdutos VALUES(5, NULL, 50, NULL, NULL, 3,3);
INSERT INTO entregaProdutos VALUES(6, NULL, 70, NULL, NULL, 2,3);

-- ENTREGA 4

INSERT INTO entregas VALUES(4,'15','4', 'CIF', '12X', '',curdate(), 3, 3);

INSERT INTO entregaProdutos VALUES(7, NULL, 50, NULL, NULL, 1,4);
INSERT INTO entregaProdutos VALUES(8, NULL, 70, NULL, NULL, 2,4);
INSERT INTO entregaProdutos VALUES(9, NULL, 60, NULL, NULL, 3,4);
INSERT INTO entregaProdutos VALUES(10, NULL, 40, NULL, NULL, 4,4);

-- ENTREGA 5

INSERT INTO entregas VALUES(5,'16','5', 'CIF' , '6X', '',curdate(), 1, 1);
INSERT INTO entregaProdutos VALUES(11,NULL, 50, NULL, NULL,2,5);
INSERT INTO entregaProdutos VALUES(12,NULL, 10, NULL, NULL,4,5);

-- ENTREGA 6

INSERT INTO entregas VALUES(6,'17','6', 'CIF', '6X', '',curdate(), 2, 2);
INSERT INTO entregaProdutos VALUES(13,NULL, 50, NULL, NULL,2,6);
INSERT INTO entregaProdutos VALUES(14,NULL, 10, NULL, NULL,3,6);

-- USUARIOS

INSERT INTO tiposUsuarios VALUES(1,'ADM');
INSERT INTO tiposUsuarios VALUES(2,'GERENTE');
INSERT INTO tiposUsuarios VALUES(3,'CONFERENTE');

INSERT INTO usuarios VALUES(1,'adm1', 'TESTE1', '1234', '123', curdate(),1);
INSERT INTO usuarios VALUES(2,'GERENTE1', 'TESTE2', '1234', '1234', curdate() ,2);
INSERT INTO usuarios VALUES(3,'CONFERENTE1', 'TESTE3', '1234', '12345', curdate(),3);