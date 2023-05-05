const pool = require('../../config/database');

pool.query(`
create table if not exists Usuarios(
    ID_usuario int NOT NULL PRIMARY KEY,
    username VARCHAR(15) NOT NULL
    );
    create unique index ux_usuarios_username on Usuarios(username);
`).then(() => {
  console.log('Tabla de usuarios creada');
}).catch((err) => {
  console.error(err);
})