const fs = require('fs');
const path = require('path');
const pool = require('../../config/database');

const migrationsDir = path.join(__dirname, './');

pool.connect((err, client, done) => {
  if (err) throw err;
  client.query('BEGIN', (err) => {
    if (err) throw err;
    try {
      const migrations = fs.readdirSync(migrationsDir).sort((a, b) => a.localeCompare(b));
      migrations.forEach((migration) => {
        const migrationPath = path.join(migrationsDir, migration);
        require(migrationPath);
      });
      client.query('COMMIT', (err) => {
        if (err) throw err;
        console.log('Migración exitosa');
        done();
      });
    } catch (error) {
      client.query('ROLLBACK', (err) => {
        if (err) throw err;
        console.error(error);
        done();
      });
    }
  });
});
