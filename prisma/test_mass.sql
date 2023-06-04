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
VALUES ('RELATORIO');	

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
