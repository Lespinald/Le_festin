const pool = require('../config/database')//Importa la base de datos

//metodos
const getRecetas  = async (req, res) => {
    const response = await pool.query('SELECT * FROM receta');
    res.json(response.rows);
}

const getRecetasById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query(`SELECT * FROM receta WHERE id_receta='${id}'`);
    res.json(response.rows);
}

module.exports = {//aca se exportan los metodos
    getRecetas, getRecetasById
}