const pool = require('../config/database');

pool.query(`
create table if not exists Ingrediente(
    ID_ingrediente int NOT NULL PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL,
    imagen TEXT
    );
`).then(() => {
  console.log('Tabla de recetas creada');
}).catch((err) => {
  console.error(err);
})