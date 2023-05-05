const pool = require('../../config/database');

pool.query(`
create table if not exists Usuarios(
  ID_usuario int NOT NULL PRIMARY KEY,
  username VARCHAR(15) NOT NULL
);
create unique index ux_usuarios_username on Usuarios(username);
  
create table if not exists Receta(
  ID_receta int NOT NULL PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  procedimiento TEXT NOT NULL,
  imagen TEXT
);

create table if not exists Ingrediente(
  ID_ingrediente int NOT NULL PRIMARY KEY,
  nombre VARCHAR(40) NOT NULL,
  imagen TEXT
  );

create table if not exists IngredienteAsociado(
  ID_ingrediente int NOT NULL,
  ID_receta int NOT NULL,
  CONSTRAINT fk_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
  CONSTRAINT fk_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
  );

create table if not exists Favorito(
  ID_ingrediente int NOT NULL,
  ID_receta int NOT NULL,
  CONSTRAINT fk1_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
  CONSTRAINT fk2_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
  );

create table if not exists Creadas(
  ID_usuario int NOT NULL,
  ID_receta int NOT NULL,
  CONSTRAINT fk1_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
  CONSTRAINT fk3_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
  );

create table if not exists Comentario(
  ID_comentario int NOT NULL PRIMARY KEY,
  ID_usuario int NOT NULL,
  username VARCHAR(15) NOT NULL,
  ID_receta int NOT NULL,
  comentario VARCHAR(200),
  CONSTRAINT fk2_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
  CONSTRAINT fk4_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
  );

create table if not exists Review(
  ID_review int NOT NULL PRIMARY KEY,
  ID_usuario int NOT NULL,
  username VARCHAR(15) NOT NULL,
  ID_receta int NOT NULL,
  review VARCHAR(200),
  CONSTRAINT fk3_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
  CONSTRAINT fk5_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
  );

create table if not exists PreguntasYSugerencias(
  ID_pregunta int NOT NULL PRIMARY KEY,
  ID_usuario int NOT NULL,
  username VARCHAR(15) NOT NULL,
  textoPregunta VARCHAR(200),
  tipo VARCHAR(1),
  textoRespuesta VARCHAR(200),
  CONSTRAINT fk4_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario)
  );
`).then(() => {
  console.log('Tabla de usuarios creada');
}).catch((err) => {
  console.error(err);
}).finally(() => {
  pool.end();
});