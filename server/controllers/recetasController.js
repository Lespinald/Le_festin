const pool = require('../config/database')//Importa la base de datos

//metodos
const getRecetas  = async (req, res) => {
    const response = await pool.query('SELECT * FROM receta');
    res.json(response.rows);
}

module.exports = {//aca se exportan los metodos
    getRecetas
}