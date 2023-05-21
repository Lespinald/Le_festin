const pool = require('../../config/database');

pool.query(`
DROP INDEX IF EXISTS ux_usuarios_username;
DROP TABLE IF EXISTS IngredienteAsociado;
DROP TABLE IF EXISTS Favorito;
DROP TABLE IF EXISTS Creadas;
DROP TABLE IF EXISTS Comentario;
DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS PreguntasYSugerencias;
DROP TABLE IF EXISTS Ingrediente;
DROP TABLE IF EXISTS Receta;
DROP TABLE IF EXISTS Usuarios;


CREATE TABLE IF NOT EXISTS Usuarios (
  ID_usuario VARCHAR(100) PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE
);
CREATE UNIQUE INDEX IF NOT EXISTS ux_usuarios_username on Usuarios(username);

CREATE TABLE IF NOT EXISTS Receta (
  ID_receta SERIAL PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  procedimiento TEXT[] NOT NULL,
  imagen TEXT
);

CREATE TABLE IF NOT EXISTS Ingrediente (
  ID_ingrediente SERIAL PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  imagen TEXT
);

CREATE TABLE IF NOT EXISTS IngredienteAsociado (
  ID_ingrediente SERIAL NOT NULL,
  ID_receta SERIAL NOT NULL,
  CONSTRAINT fk_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
  CONSTRAINT fk_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
);

CREATE TABLE IF NOT EXISTS Favorito (
  ID_ingrediente SERIAL NOT NULL,
  ID_receta SERIAL NOT NULL,
  CONSTRAINT fk1_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
  CONSTRAINT fk2_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
);

CREATE TABLE IF NOT EXISTS Creadas (
  ID_usuario VARCHAR(100) NOT NULL,
  ID_receta SERIAL NOT NULL,
  CONSTRAINT fk1_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
  CONSTRAINT fk3_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
);

CREATE TABLE IF NOT EXISTS Comentario (
  ID_comentario SERIAL PRIMARY KEY,
  ID_usuario VARCHAR(100) NOT NULL,
  ID_receta SERIAL NOT NULL,
  comentario INTEGER CHECK (comentario BETWEEN 1 AND 5),
  CONSTRAINT fk2_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
  CONSTRAINT fk4_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
);

CREATE TABLE IF NOT EXISTS Review (
  ID_review SERIAL PRIMARY KEY,
  ID_usuario VARCHAR(100) NOT NULL,
  ID_receta SERIAL NOT NULL,
  review VARCHAR(200),
  CONSTRAINT fk3_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
  CONSTRAINT fk5_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
);

CREATE TABLE IF NOT EXISTS PreguntasYSugerencias (
  ID_pregunta SERIAL PRIMARY KEY,
  ID_usuario VARCHAR(100) NOT NULL,
  textoPregunta VARCHAR(200),
  tipo VARCHAR(1),
  textoRespuesta VARCHAR(200),
  CONSTRAINT fk4_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario)
);

CREATE EXTENSION IF NOT EXISTS unaccent;

`).then(() => {
  console.log('Tabla de usuarios creada');
}).catch((err) => {
  console.error(err);
}).finally(() => {
  pool.end();
});