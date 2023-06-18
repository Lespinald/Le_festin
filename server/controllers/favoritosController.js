const pool = require('../config/database')//Importa la base de datos

//métodos

const postFavoritos = async(req, res) =>{
    try{
        const{ id_usuario, id_receta} = req.body;
        
        const response = await pool.query('INSERT INTO favorito (id_usuario, id_receta) VALUES ($1,$2)', [id_usuario, id_receta]);
        console.log("postFAV: ",response);
        res.send('receta añadida como favorita');
    }catch(error){
        console.error(error);
        res.status(500).send('Error al añadir favorita')
    }
}

const deleteFavoritos = async(req, res) =>{
    try{
        const{ id_usuario, id_receta} = req.body;
        
        const response = await pool.query(`DELETE FROM favorito WHERE id_receta = '${id_receta}' AND id_usuario = '${id_usuario}';`);
        console.log(response);
        res.send('receta eliminada como favorita');
    }catch(error){
        console.error(error);
        res.status(500).send('Error al eliminar favorita')
    }
}

const verificarFavoritos = async(req, res) =>{
    const{ id_usuario, id_receta} = req.body;
    
    const response = await pool.query(`SELECT COUNT(*) AS existe_receta FROM favorito WHERE id_receta = '${id_receta}' AND id_usuario = '${id_usuario}';`);
    const existeReceta = response.rows;
    res.send(existeReceta);
}


module.exports = {// se exportan los métodos
    postFavoritos,
    deleteFavoritos,
    verificarFavoritos
}