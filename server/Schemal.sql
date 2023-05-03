--Creación DB
create database LeFestin
--Línea usada para interactuar con esta DB 
use LeFestin

--Creación tabla Usuarios
create table Usuarios(
ID_usuario int NOT NULL PRIMARY KEY,
username NVARCHAR(15) NOT NULL,
);
create unique index ux_usuarios_username on Usuarios(username);

--Creación tabla Receta
create table Receta(
ID_receta int NOT NULL PRIMARY KEY,
nombre VARCHAR(40) NOT NULL,
descripcion VARCHAR(100) NOT NULL,
procedimiento TEXT NOT NULL,
imagen TEXT,
);

--Creación tabla Ingrediente
create table Ingrediente(
ID_ingrediente int NOT NULL PRIMARY KEY,
nombre VARCHAR(40) NOT NULL,
imagen TEXT,
);

--Creación tabla Ingrediente Asociado
create table IngredienteAsociado(
ID_ingrediente int NOT NULL,
ID_receta int NOT NULL,
CONSTRAINT fk_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
CONSTRAINT fk_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta),
);

--Creación tabla Favorito
create table Favorito(
ID_ingrediente int NOT NULL,
ID_receta int NOT NULL,
CONSTRAINT fk1_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
CONSTRAINT fk2_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta),
);

--Creación tabla Creadas
create table Creadas(
ID_usuario int NOT NULL,
ID_receta int NOT NULL,
CONSTRAINT fk1_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
CONSTRAINT fk3_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta),
);

--Creación tabla Comentario
create table Comentario(
ID_comentario int NOT NULL PRIMARY KEY,
ID_usuario int NOT NULL,
username NVARCHAR(15) NOT NULL,
ID_receta int NOT NULL,
comentario NVARCHAR(200),
CONSTRAINT fk2_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
CONSTRAINT fk4_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta),
);

--Creación tabla Review
create table Review(
ID_review int NOT NULL PRIMARY KEY,
ID_usuario int NOT NULL,
username NVARCHAR(15) NOT NULL,
ID_receta int NOT NULL,
review NVARCHAR(200),
CONSTRAINT fk3_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
CONSTRAINT fk5_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta),
);

--Creación tabla PreguntasYSugerencias
create table PreguntasYSugerencias(
ID_pregunta int NOT NULL PRIMARY KEY,
ID_usuario int NOT NULL,
username NVARCHAR(15) NOT NULL,
textoPregunta NVARCHAR(200),
tipo VARCHAR(1),
textoRespuesta NVARCHAR(200),
CONSTRAINT fk4_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
);




