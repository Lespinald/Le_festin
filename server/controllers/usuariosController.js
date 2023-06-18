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
    try {
        const { id_usuario, username } = req.body;
    
        const response = await pool.query('INSERT INTO usuarios (id_usuario, username) VALUES ($1,$2)', [id_usuario, username]);
        console.log(response);
        res.send('usuario creado');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar usuario');
    }
}

const vefificarUsuario = async (req, res) => {
    const id_usuario = req.params.id;
    const response = await pool.query(`SELECT COUNT(*) as existe_usuario FROM Usuarios WHERE id_usuario = '${id_usuario}';`)
    console.log(response.rows)
    const existeUsuario = response.rows[0].existe_usuario > 0;
    res.send(existeUsuario)//retorna true o false si existe o no
}

const cantidadRecetasFavoritasUsuario = async (req, res) => {
    const id_usuario = req.params.id;
    const response = await pool.query(`SELECT COUNT(*) AS cantidad_recetas FROM favorito WHERE id_usuario = '${id_usuario}';`)
    console.log(response.rows)
    res.send(response.rows[0].existe_usuario)//retorna true o false si existe o no
}

const cantidadRecetasUsuario = async (req, res) => {
    const id_usuario = req.params.id;
    const response = await pool.query(`SELECT COUNT(*) AS cantidad_recetas FROM creadas WHERE id_usuario = '${id_usuario}';`)
    console.log(response.rows)
    res.send(response.rows[0].existe_usuario)//retorna true o false si existe o no
}

module.exports = {//aca se exportan los metodos
    getUsuarios,
    getNombreUsuarios,
    cantidadRecetasFavoritasUsuario,
    cantidadRecetasUsuario,
    crearUsuario,
    vefificarUsuario
}
  