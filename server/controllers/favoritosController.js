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

const getVerificarFavoritos = async(req, res) =>{
    const{ id_usuario, id_receta} = req.body;
    console.log("here controlador")
    const response = await pool.query(`SELECT EXISTS (SELECT 1 FROM favorito WHERE id_receta = $1 AND id_usuario = $2) AS existe_receta`,[id_usuario, id_receta]);
    console.log("🚀 ~ file: favoritosController.js:34 ~ verificarFavoritos ~ response.rows:", response.rows)
    const respuesta = response.rows;
    res.send(respuesta);
}


module.exports = {// se exportan los métodos
    postFavoritos,
    deleteFavoritos,
    getVerificarFavoritos
}