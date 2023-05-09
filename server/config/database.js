const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LeFestin',
  password: 'PON LA TUYA CRACK',
  port: 5432,
});


module.exports = pool;
