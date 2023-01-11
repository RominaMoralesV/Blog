-- Creamos la base de datos --
create database blog;

-- seleccionamos la base de datos a utilizar --
use blog;

-- Creamos la tabla de nuestra base de datos --
create table contacto(
idContacto int unsigned not null auto_increment,
nombre varchar(150) not null,
email varchar (200) not null,
comentario varchar(500) not null,
primary key (idContacto)
);