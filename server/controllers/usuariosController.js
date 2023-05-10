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

const getUsuarioById = async (req, res) => {
    const id = req.params.id;

    const response = await pool.query(`SELECT * FROM usuarios WHERE id_usuario='${id}'`);
    res.json(response.rows);
}

const crearUsuario = async (req, res) => {
    const { id_usuario, username } = req.body;

    try {
        const query = 'INSERT INTO usuarios (id_usuario, username) VALUES ($1, $2)';
        const response = await pool.query(query, [id_usuario, username]);
        console.log(response);
        res.send('Usuario creado');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el usuario');
    }
}

module.exports = {//aca se exportan los metodos
    getUsuarios,
    getUsuarioById,
    getNombreUsuarios,
    crearUsuario
}
  