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

INSERT INTO entregaProdutos(id, pesoPrevisto,produtoId,EntregaId) VALUES(1,20.4,1,1);
INSERT INTO entregaProdutos(id, pesoPrevisto,produtoId,EntregaId) VALUES(2,100,2,1);
INSERT INTO entregaProdutos(id, pesoPrevisto,produtoId,EntregaId) VALUES(3,50,2,2);

INSERT INTO fornecedorProdutos VALUES(1,1);
INSERT INTO fornecedorProdutos VALUES(1,2);
INSERT INTO fornecedorProdutos VALUES(2,2);

INSERT INTO tiposUsuarios VALUES(1,'ADM');
INSERT INTO tiposUsuarios VALUES(2,'GERENTE');
INSERT INTO tiposUsuarios VALUES(3,'CONFERENTE');

INSERT INTO usuarios VALUES(1,'adm1', 'TESTE1', '1234', '123', curdate(),1);
INSERT INTO usuarios VALUES(2,'GERENTE1', 'TESTE2', '1234', '1234', curdate() ,2);
INSERT INTO usuarios VALUES(3,'CONFERENTE1', 'TESTE3', '1234', '12345', curdate(),3);

INSERT INTO statusEntregas VALUES(NULL, 1, 1, 1);
INSERT INTO statusEntregas VALUES(NULL, 2, 2, 1);
