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
    const { id_usuario, username } = req.body;

    const response = await pool.query('INSERT INTO usuarios (id_usuario, username) VALUES ($1,$2)', [id_usuario, username]);
    console.log(response);
    res.send('usuario creado');
}

const vefificarUsuario = async (req, res) => {
    const id_usuario = req.params.id;
    const response = await pool.query(`SELECT COUNT(*) as existe_usuario FROM Usuarios WHERE id_usuario = '${id_usuario}';`)
    console.log(response.rows)
    const existeUsuario = response.rows[0].existe_usuario > 0;
    res.send(existeUsuario)//retorna true o false si existe o no
}

module.exports = {//aca se exportan los metodos
    getUsuarios,
    getNombreUsuarios,
    crearUsuario,
    vefificarUsuario
}
  