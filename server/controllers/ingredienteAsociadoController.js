const pool = require('../config/database')//Importa la base de datos

//metodos
const getIngredienteAsociado  = async (req, res) => {
    const response = await pool.query('SELECT * FROM ingredienteasociado');
    res.json(response.rows);
}

module.exports = {//aca se exportan los metodos
    getIngredienteAsociado
}