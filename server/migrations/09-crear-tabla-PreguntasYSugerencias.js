const pool = require('../config/database');

pool.query(`
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
  console.log('Tabla de recetas creada');
}).catch((err) => {
  console.error(err);
}).finally(() => {
  pool.end();
});