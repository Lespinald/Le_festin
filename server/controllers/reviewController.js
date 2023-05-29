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

module.exports = {//aca se exportan los metodos
  getPromedioReviewByRecetaID,
  postReview,
  getReviewsAll
}