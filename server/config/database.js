const { Pool } = require('pg');
const pass = require('./password') //crear archivo password.js y escribir "module.exports = 'contraseña';"

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LeFestin',
  password: pass, //crear archivo password.js y escribir "module.exports = 'contraseña';"
  port: 5432,
});


module.exports = pool;
