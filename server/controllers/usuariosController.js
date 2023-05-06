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

const crearUsuario = async (req, res) => {
    const { username } = req.body;

    const response = await pool.query('INSERT INTO usuarios (id_usuario, username) VALUES ($1, $2)', [10, username]);
    console.log(response);
    res.send('usuario creado');
}

module.exports = {//aca se exportan los metodos
    getUsuarios,
    getNombreUsuarios,
    crearUsuario
}
  