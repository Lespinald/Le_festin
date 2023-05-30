const pool = require('../config/database')//Importa la base de datos

//métodos
const getComentarios = async(req, res) =>{
    const response = await pool.query('SELECT * FROM comentario');
    res.json(response.rows);
}

const getComentariosbyReceta = async(req, res) => {
    const id_receta = req.params.id_receta;
    const response = await pool.query(`
    SELECT u.username, c.comentario 
    FROM comentario c
    INNER JOIN usuarios u ON c.id_usuario = u.id_usuario
    WHERE id_receta='${id_receta}'
    `);
    res.json(response.rows);
}

const postComentario = async(req, res) =>{
    try{
            const{ id_usuario, id_receta, comentario}=req.body;
            
            const response = await pool.query('INSERT INTO comentario (id_usuario, id_receta, comentario) VALUES ($1,$2,$3)', [id_usuario, id_receta, comentario]);
            console.log(response);
            res.send('comentario añadido');
        }catch(error){
            console.error(error);
            res.status(500).send('Error al añadir comentario')
        }
}





module.exports = {// se exportan los métodos
    getComentarios,
    getComentariosbyReceta,
    postComentario
}