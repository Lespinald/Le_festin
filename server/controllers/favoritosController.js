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


module.exports = {// se exportan los métodos
    postFavoritos
}