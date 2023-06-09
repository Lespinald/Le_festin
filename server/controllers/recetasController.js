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

const createRecetas = async (req, res) => {
    try {
        const { id_usuario, nombre, descripcion, procedimiento, imagen, ingredientes } = req.body;
        
        const response_1 = await pool.query(`
        INSERT INTO Receta(nombre,descripcion,procedimiento,imagen) values ($1,$2,$3,$4);
        `, [nombre, descripcion, procedimiento, imagen]);

        const response_2 = await pool.query(`
        INSERT INTO Creadas(id_usuario,  id_receta)
        SELECT usuarios.id_usuario, receta.id_receta
        FROM usuarios, receta
        WHERE usuarios.id_usuario = $1
        AND receta.descripcion = $2;
        `, [id_usuario, descripcion]);

        for (let i = 0; i < ingredientes.length; i++) {
            const ingrediente = ingredientes[i];
            
            const response_3 = await pool.query(`
            INSERT INTO ingredienteAsociado(id_ingrediente,  id_receta)
            SELECT ingrediente.id_ingrediente, receta.id_receta
            FROM ingrediente, receta
            WHERE ingrediente.nombre = $1
            AND receta.descripcion = $2;
            `, [ingrediente, descripcion]);
            console.log(response_3);
        }

        console.log(response_1);
        console.log(response_2);
        res.send('receta creada');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear receta');
    }
}


const getRecetasRecomendadas = async (req, res) => {

    const fechaAnterior = new Date();
    fechaAnterior.setDate(fechaAnterior.getDate() - 1);

    const response = await pool.query(`
        SELECT r.*
        FROM Visualizaciones v
        JOIN Receta r ON v.id_receta = r.id_receta
        WHERE v.fecha = $1
        ORDER BY v.visualizaciones DESC
        LIMIT 5;
    `, [fechaAnterior]);

    res.json(response.rows);
}

const getRecetasByIdUsuario = async(req, res) => {
    const id_usuario = req.params.id_usuario;
    const response = await pool.query(`SELECT r.*
    FROM Receta r
    INNER JOIN Creadas c ON r.ID_receta = c.ID_receta
    WHERE c.ID_usuario = '${id_usuario}'`);
    res.json(response.rows);
}

const deleteRecetasById = async(req, res) => {
    try {
        const id_receta = req.params.id_receta;
        const response = await pool.query(`
        DELETE FROM IngredienteAsociado
        WHERE ID_receta = '${id_receta}';
        DELETE FROM Favorito
        WHERE ID_receta = '${id_receta}';
        DELETE FROM Creadas
        WHERE ID_receta = '${id_receta}';
        DELETE FROM Comentario
        WHERE ID_receta = '${id_receta}';
        DELETE FROM Review
        WHERE ID_receta = '${id_receta}';
        DELETE FROM Receta
        WHERE ID_receta = '${id_receta}';
        `)
        res.send('Receta eliminada correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar receta');
    }
    
}



  
module.exports = {//aca se exportan los metodos
    getRecetas, 
    getRecetasById,
    getRecetasbyIngredientes,
    createRecetas,
    getRecetasRecomendadas,
    getRecetasByIdUsuario,
    deleteRecetasById
}