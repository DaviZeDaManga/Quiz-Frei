CREATE DATABASE quizdb;

USE quizdb;

CREATE TABLE tb_usuario (
	id_usuario				int primary key auto_increment,
    nm_nome					varchar(200),
    ds_email				varchar(600),
    nr_acertos				int,
    nr_pontos				int
);