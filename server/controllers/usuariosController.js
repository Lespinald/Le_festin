const pool = require('../config/database')//Importa la base de datos

//metodos
const getUsuarios = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios');
    res.json(response.rows);
}

const getNombreUsuarios = async (req, res) => {
    const response = await pool.query('SELECT username FROM usuarios');
    res.json(response.rows);
}

module.exports = {//aca se exportan los metodos
    getUsuarios,
    getNombreUsuarios
}
  