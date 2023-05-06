const pool = require('../config/database')//Importa la base de datos

//metodos
const getPreguntasSugerencias  = async (req, res) => {
    const response = await pool.query('SELECT * FROM preguntasysugerencias');
    res.json(response.rows);
}


module.exports = {//aca se exportan los metodos
    getPreguntasSugerencias
}