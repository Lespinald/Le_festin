const pool = require('../config/database')//Importa la base de datos

//métodos

const postFavoritos = async(req, res) =>{
    try{
        const{ id_usuario, id_receta} = req.body;
        
        const response = await pool.query('INSERT INTO favorito (id_usuario, id_receta) VALUES ($1,$2)', [id_usuario, id_receta]);
        console.log(response);
        res.send('receta añadida como favorita');
    }catch(error){
        console.error(error);
        res.status(500).send('Error al añadir comentario')
    }
}

const getFavoritos = async(req, res) =>{
    try{
        const id_usuario = req.id_usuario;
        const response = await pool.query('SELECT id_receta FROM favorito WHERE id_usuario=$1',id_usuario);
        res.json(response.rows);
    }catch{
        console.error(error);
        res.status(500).send('Error al obtener favoritos');
    }

}


module.exports = {// se exportan los métodos
    postFavoritos,
    getFavoritos

}
