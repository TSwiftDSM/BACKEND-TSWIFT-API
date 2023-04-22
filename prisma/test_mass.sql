INSERT INTO testesQualidades VALUES(1, 'TESTE QUALIDADE 1');
INSERT INTO testesQualidades VALUES(2, 'TESTE QUALIDADE 2');

INSERT INTO produtos VALUES(1,'PRODUTO 1', 'KG');
INSERT INTO produtos VALUES(2,'PRODUTO 2', 'KG');

INSERT INTO fornecedores VALUES(1,'Fornecedor1','1', 'Fornecedor1', 'Rua dos Bobos', true, true);
INSERT INTO fornecedores VALUES(2,'Fornecedor2','2', 'Fornecedor2', 'Rua dos Bobos', true, true);

INSERT INTO qualidadeProdutos VALUES(1, 1, 1);
INSERT INTO qualidadeProdutos VALUES(1, 2, 1);
INSERT INTO qualidadeProdutos VALUES(1, 1, 2);

INSERT INTO transportadorasFornecedores VALUES(1,1, 1);
INSERT INTO transportadorasFornecedores VALUES(2,2,2);

INSERT INTO entregas VALUES(1,'1123entregas','123', 'CIF' , '6X', 1,curdate(), 1, 1);
INSERT INTO entregas VALUES(2,'11241','12341', 'CIF', '6X', 2,curdate(), 1, 2);

INSERT INTO entregaProdutos VALUES(1,20, 50, 20, 'CAMINHAO', 1,1);
INSERT INTO entregaProdutos VALUES(2,100, 50, 40, 'CAMINHAO',2,1);
INSERT INTO entregaProdutos VALUES(3, 50, 50, 30, 'CAMINHAO', 2,2);

INSERT INTO fornecedorProdutos VALUES(1,1);
INSERT INTO fornecedorProdutos VALUES(1,2);
INSERT INTO fornecedorProdutos VALUES(2,2);

INSERT INTO tiposUsuarios VALUES(1,'ADM');
INSERT INTO tiposUsuarios VALUES(2,'GERENTE');
INSERT INTO tiposUsuarios VALUES(3,'CONFERENTE');

INSERT INTO usuarios VALUES(1,'adm1', 'TESTE1', '1234', '123', curdate(),1);
INSERT INTO usuarios VALUES(2,'GERENTE1', 'TESTE2', '1234', '1234', curdate() ,2);
INSERT INTO usuarios VALUES(3,'CONFERENTE1', 'TESTE3', '1234', '12345', curdate(),3);
