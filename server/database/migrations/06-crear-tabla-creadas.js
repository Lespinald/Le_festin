const pool = require('../../config/database');

pool.query(`
create table if not exists Creadas(
    ID_usuario int NOT NULL,
    ID_receta int NOT NULL,
    CONSTRAINT fk1_usuario FOREIGN KEY (ID_usuario) REFERENCES Usuarios (ID_usuario),
    CONSTRAINT fk3_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
    );
`).then(() => {
  console.log('Tabla de creadas creada');
}).catch((err) => {
  console.error(err);
})