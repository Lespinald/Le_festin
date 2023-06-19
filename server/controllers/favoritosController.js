const pool = require('../config/database')//Importa la base de datos

//métodos

const postFavoritos = async(req, res) =>{
    try{
        const{ id_usuario, id_receta} = req.body;
        
        const response = await pool.query('INSERT INTO favorito (id_usuario, id_receta) VALUES ($1,$2)', [id_usuario, id_receta]);
        res.send(response);
    }catch(error){
        console.error(error);
        res.status(500).send('Error al añadir favorita')
    }
}

const deleteFavoritos = async(req, res) =>{
    try{
        const{ id_usuario, id_receta} = req.body;
        
        const response = await pool.query(`DELETE FROM favorito WHERE id_receta = '${id_receta}' AND id_usuario = '${id_usuario}';`);
        res.send(response);
    }catch(error){
        console.error(error);
        res.status(500).send('Error al eliminar favorita')
    }
}

const verificarFavoritos = async(req, res) =>{
    const{ id_usuario, id_receta} = req.body;
    
    const response = await pool.query(`SELECT COUNT(*) AS existe_receta FROM favorito WHERE id_receta = '${id_receta}' AND id_usuario = '${id_usuario}';`);
    console.log("🚀 ~ file: favoritosController.js:34 ~ verificarFavoritos ~ response.rows:", response.rows[0].existe_receta)
    res.send(response.rows);
}

const favoritosByIngredientes = async(req, res) =>{
    const ingredientes1 = JSON.parse(req.params.ingredientes);
    console.log(ingredientes1)
    const string = ingredientes1.join("','");//aca se convierten en cadena para la query
    const ingredientes = "'" + string + "'";
    const id_usuario = req.params.id_usuario;
    const response = await pool.query(`
    SELECT r.*
    FROM Receta r
    INNER JOIN IngredienteAsociado ia ON r.ID_receta = ia.ID_receta
    INNER JOIN Ingrediente i ON ia.ID_ingrediente = i.ID_ingrediente
    INNER JOIN Favorito f ON r.ID_receta = f.ID_receta
    WHERE f.ID_usuario = '${id_usuario}'
    AND i.nombre IN ('${ingredientes}')
    
    `)
    res.json(response.rows)
}


module.exports = {// se exportan los métodos
    postFavoritos,
    deleteFavoritos,
    verificarFavoritos,
    favoritosByIngredientes
}