const pool = require('../config/database')

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios');
    res.json(response.rows);
}

const getNombreUsers = async (req, res) => {
    const response = await pool.query('SELECT username FROM usuarios');
    res.json(response.rows);
}

module.exports = {
    getUsers,
    getNombreUsers
}
  