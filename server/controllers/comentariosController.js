const pool = require('../config/database')//Importa la base de datos

//métodos
const getComentarios = async(req, res) =>{
    const response = await pool.query('SELECT * FROM comentario');
    res.json(response.rows);
}





module.exports = {// se exportan los métodos
    getComentarios
}