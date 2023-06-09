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

const favoritosByIngredientes = async (req, res) => {
    const ingredientes1 = JSON.parse(req.params.ingredientes);
    console.log(ingredientes1);
    
    const placeholders = ingredientes1.map((_, index) => `$${index + 1}`).join(", ");
    const id_usuario = req.params.id_usuario;
    
    const query = `
      SELECT DISTINCT r.*
      FROM Receta r
      INNER JOIN IngredienteAsociado ia ON r.ID_receta = ia.ID_receta
      INNER JOIN Ingrediente i ON ia.ID_ingrediente = i.ID_ingrediente
      INNER JOIN Favorito f ON r.ID_receta = f.ID_receta
      WHERE i.nombre IN (${placeholders})
      AND f.ID_usuario = $${ingredientes1.length + 1}
      GROUP BY r.ID_receta
    `;
    
    const values = [...ingredientes1, id_usuario];
    const response = await pool.query(query, values);
    res.json(response.rows);
  };


  const getFavoritos = async(req, res) =>{
    try{
        const id_usuario = req.params.uid;
        const response = await pool.query(
        `select receta.*
        from receta
        join favorito on receta.id_receta= favorito.id_receta where id_usuario='${id_usuario}'`
        );
        res.json(response.rows);
    }catch(error){
        console.error(error);
        res.status(500).send('Error al añadir favorita')
    }
}


module.exports = {// se exportan los métodos
    postFavoritos,
    deleteFavoritos,
    getVerificarFavoritos,
    favoritosByIngredientes,
    getFavoritos
}