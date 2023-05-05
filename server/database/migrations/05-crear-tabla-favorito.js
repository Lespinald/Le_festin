const pool = require('../../config/database');

pool.query(`
create table if not exists Favorito(
    ID_ingrediente int NOT NULL,
    ID_receta int NOT NULL,
    CONSTRAINT fk1_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
    CONSTRAINT fk2_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
    );
`).then(() => {
  console.log('Tabla de favorito creada');
}).catch((err) => {
  console.error(err);
})