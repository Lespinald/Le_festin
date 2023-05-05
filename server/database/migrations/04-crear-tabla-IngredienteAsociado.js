const pool = require('../../config/database');

pool.query(`
create table if not exists IngredienteAsociado(
    ID_ingrediente int NOT NULL,
    ID_receta int NOT NULL,
    CONSTRAINT fk_ingrediente FOREIGN KEY (ID_ingrediente) REFERENCES Ingrediente (ID_ingrediente),
    CONSTRAINT fk_receta FOREIGN KEY (ID_receta) REFERENCES Receta (ID_receta)
    );
`).then(() => {
  console.log('Tabla de recetas creada');
}).catch((err) => {
  console.error(err);
})