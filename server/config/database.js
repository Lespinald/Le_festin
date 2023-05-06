const mongoose = require('mongoose');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LeFestin',
  password: '1025520214',
  port: 5432,
});

mongoose.connect(`postgresql://${pool.options.user}:${pool.options.password}@${pool.options.host}:${pool.options.port}/${pool.options.database}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connected to database');
});

module.exports = db;
