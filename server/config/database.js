const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LeFestin',
  password: '1025520214',
  port: 5432,
});


module.exports = pool;
