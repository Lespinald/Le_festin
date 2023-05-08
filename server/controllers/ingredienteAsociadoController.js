const pool = require('../config/database')//Importa la base de datos

//metodos
const getIngredienteAsociado = async (req, res) => {
    const response = await pool.query(
        `SELECT r.nombre as nombre_receta, r.descripcion, i.nombre as nombre_ingrediente, i.imagen
         FROM Receta r
         INNER JOIN IngredienteAsociado ia ON r.ID_receta = ia.ID_receta
         INNER JOIN Ingrediente i ON ia.ID_ingrediente = i.ID_ingrediente`
    );
    res.json(response.rows);
}

const getIngredientesIdByRecetaID = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query(`SELECT iaso.id_ingrediente FROM ingredienteasociado iaso WHERE id_receta='${id}'`);
    res.json(response.rows);
}

module.exports = {//aca se exportan los metodos
    getIngredienteAsociado,
    getIngredientesIdByRecetaID
}