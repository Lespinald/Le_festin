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

const getRecetasbyIngredientes = async (req, res) => {
    // Obtener los nombres de los ingredientes de req.params.ingredientes
    const ingredientes = JSON.parse(req.params.ingredientes);
    console.log(ingredientes)
    const string = ingredientes.join("','");//aca se convierten en cadena para la query
    const result = "'" + string + "'";
    console.log(result)
  
    // Crear una consulta SQL dinámica para buscar las recetas que contengan los ingredientes especificados
    // Ejecutar la consulta SQL con los nombres de los ingredientes como parámetros
    const response = await pool.query( `
    SELECT Receta.id_receta, Receta.nombre, Receta.descripcion, Receta.procedimiento, Receta.Imagen
    FROM Receta
    JOIN IngredienteAsociado ON Receta.ID_receta = IngredienteAsociado.ID_receta
    JOIN Ingrediente ON IngredienteAsociado.ID_ingrediente = Ingrediente.ID_ingrediente
    WHERE Ingrediente.nombre IN (${result})
	GROUP BY Receta.id_receta, Receta.nombre, Receta.descripcion, Receta.procedimiento, Receta.Imagen
    HAVING COUNT(DISTINCT Ingrediente.nombre) = ${ingredientes.length};
  `);
    res.json(response.rows);
};

  
module.exports = {//aca se exportan los metodos
    getRecetas, 
    getRecetasById,
    getRecetasbyIngredientes
}