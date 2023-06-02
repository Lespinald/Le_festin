const pool = require('../config/database')//Importa la base de datos

//metodos
const getReviewsAll = async (req, res) => {
  const response = await pool.query(`SELECT * FROM review`);
  res.json(response.rows);
}

const getPromedioReviewByRecetaID = async(req, res) => {
  const id = req.params.id
  const response = await pool.query(`SELECT AVG(review) FROM review WHERE id_receta = '${id}'`);
  res.json(response.rows);
}

const postReview = async(req, res) => {
  try{
    const {id_usuario, id_receta, review} = req.body;

    const response = await pool.query(
      `INSERT INTO review (id_usuario, id_receta, review) VALUES ($1,$2,$3)`,
      [id_usuario, id_receta, review]
    );

    console.log(response);
    res.send('review añadida');

  }catch(error){
    console.error(error);
    res.status(500).send('Error al añadir review');
  }
}
 //para verificar si una persona ya califico una receta
const verificarReview = async(req, res) => {
  const id_usuario = req.params.id_usuario;
  const id_receta = req.params.id_receta;

  // Realizar la consulta SQL para verificar el registro
  const response = await pool.query('SELECT COUNT(*) FROM review WHERE id_usuario = $1 AND id_receta = $2', [id_usuario, id_receta]);

  // Obtener el resultado de la consulta
  const existeRegistro = response.rows[0].count > 0;

  // Hacer algo con el resultado
  if (existeRegistro) {
    // El registro existe
    res.status(200).json(true);
  } else {
    // El registro no existe
    res.status(404).json(false);
  }
}

module.exports = {//aca se exportan los metodos
  getPromedioReviewByRecetaID,
  postReview,
  getReviewsAll,
  verificarReview
}