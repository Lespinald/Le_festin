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
    const id_usuario = req.params.id_usuario;
    const id_receta = req.params.id_receta;
    console.log("antes del query")
    const response = await pool.query(`SELECT COUNT(*) AS existe_receta FROM favorito WHERE id_receta = '${id_receta}' AND id_usuario = '${id_usuario}'`);
    console.log("🚀 ~ file: favoritosController.js:34 ~ verificarFavoritos ~ response.rows:", response)
    const respuesta = response.rows[0].existe_receta > 0;
    res.send(respuesta);
}


module.exports = {// se exportan los métodos
    postFavoritos,
    deleteFavoritos,
    getVerificarFavoritos
}