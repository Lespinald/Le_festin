const pool = require('../config/database')//Importa la base de datos

//métodos
const getVisualizaciones = async(req, res) =>{
    var date = new Date();
    const response = await pool.query('SELECT * FROM visualizaciones');
    console.log(date);
    res.json(response.rows);
}

const postVisualizacion = async(req, res) =>{
    try{
        console.log('accediendo al metodo');
        const fecha = new Date();
        const visualizaciones = 0;
        var numero_recetas = 7;

        for (let id=1; id<numero_recetas+1; id++) {
            try {
                const response = await pool.query('INSERT INTO visualizaciones (id_receta, fecha, visualizaciones) VALUES ($1,$2,$3)', [id, fecha, visualizaciones]);
                console.log(response);
                console.log(id);
            } catch (error) {
                console.log(error);
            }
        }

    }catch(error){
        console.error(error);
        res.status(500).send('Error al crear una visualizacion inicial');
    }
}

const updateVisualization = async(req, res) => {
    try {
        const {id_receta} = req.body;
        const fecha = new Date();

        const response = await pool.query(`
            UPDATE visualizaciones 
            SET visualizaciones = visualizaciones + 1
            WHERE id_receta = $1
            AND fecha = $2;
        `, [id_receta, fecha]);
        console.log(response);
        res.send('visualización añadida');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al añadir visualización')
    }

}





module.exports = {// se exportan los métodos
    getVisualizaciones,
    postVisualizacion,
    updateVisualization
}