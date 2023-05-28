const { Pool } = require('pg');

const pool = new Pool({
  user: 'lina7',
  host: 'dpg-chpdhuqk728ivvvca6n0-a.ohio-postgres.render.com',
  database: 'lefestin',
  password: 'oTttwsPM8UFF0ERvJQHXP93Bfs8VuCYj',
  port: 5432,
  ssl: true
});


module.exports = pool;
