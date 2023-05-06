const pool = require('../config/database')//Importa la base de datos


//metodos
const getIngredientes  = async (req, res) => {
    const response = await pool.query('SELECT * FROM ingrediente');
    res.json(response.rows);
}

module.exports = {//aca se exportan los metodos
    getIngredientes
}