const { Pool } = require('pg');

const pool = new Pool({
  user: 'uydxpmdl',
  host: 'silly.db.elephantsql.com',
  database: 'uydxpmdl',
  password: 'l5KaCHl6bWolt2n0sbyyrzjeIRwl40bG',
  port: 5432,
});


module.exports = pool;
