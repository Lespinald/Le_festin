const pool = require('../config/database');

pool.query(`
create table if not exists Review(
    ID_review int NOT NULL PRIMARY KEY,
    ID_usuario int NOT NULL,
    username VARCHAR(15) NOT NULL,
    ID_receta int NOT NULL,
    review VARCHAR(200),
    CONSTRAINT fk3_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
    CONSTRAINT fk5_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
    );
`).then(() => {
  console.log('Tabla de recetas creada');
}).catch((err) => {
  console.error(err);
})