const pool = require('../config/database')//Importa la base de datos


//metodos--------------------------------------------------------------
const getIngredientes  = async (req, res) => {
    const response = await pool.query('SELECT * FROM ingrediente');
    res.json(response.rows);
}

const getIngredientesById  = async (req, res) => {
    const id = req.params.id
    const response = await pool.query(`SELECT * FROM ingrediente WHERE id_ingrediente='${id}'`);
    res.json(response.rows);
}

const getIngredientesByIdList  = async (req, res) => {
    const list = req.params.list.split(",");
    let query = 'SELECT * FROM ingrediente WHERE';
    list.map((e,i) => {
        query += ` id_ingrediente='${e}'`;
        if(i < (list.length - 1)) query += ' or';
    });
    console.log(query);
    const response = await pool.query(query);
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
    getIngredientesById,
    getIngredientesByIdList,
    busquedaNombre
}