const pool = require('../config/database')//Importa la base de datos


//metodos--------------------------------------------------------------
const getIngredientes  = async (req, res) => {
    const response = await pool.query('SELECT * FROM ingrediente');
    res.json(response.rows);
}

const busquedaNombre = async (req, res) => {
    nombre = req.params.nombre
    const response = await pool.query('SELECT * FROM ingrediente WHERE unaccent(lower(nombre)) LIKE unaccent(lower(\'%\' || $1 || \'%\'))', [nombre]);
    res.json(response.rows);
}


//aca se exportan los metodos---------------------------
module.exports = {
    getIngredientes,
    busquedaNombre
}