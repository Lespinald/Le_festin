const express = require('express');
const router = express.Router();

//importan los metodos de los controladores----------------------------
const { getUsuarios, getNombreUsuarios, crearUsuario } = require('../controllers/usuariosController');
const { getRecetas } = require('../controllers/recetasController');
const { getIngredientes } = require('../controllers/IngredientesController');
const { getIngredienteAsociado } = require('../controllers/ingredienteAsociadoController')
const { getPreguntasSugerencias } = require('../controllers/preguntasySugerenciasController');


//se definen los objetos de enrutamiento-----------------------------
const usuariosRouter = express.Router();
const recetasRouter = express.Router();
const ingredientesRouter = express.Router();
const ingredienteAsociadoRouter = express.Router();
const preguntasSugerenciasRouter = express.Router();

//se definen las rutas----------------------------------------------
router.get('/api', (req, res) => {
    res.json("API")
})
//------------------Usuarios
router.use('/api/usuarios', usuariosRouter);
usuariosRouter.get('', getUsuarios);
usuariosRouter.get('/nombres', getNombreUsuarios);
usuariosRouter.post('/crear', crearUsuario);
//------------------Recetas
router.use('/api/recetas', recetasRouter);
recetasRouter.get('', getRecetas);
//------------------Ingredientes
router.use('/api/ingredientes', ingredientesRouter);
ingredientesRouter.get('', getIngredientes);
//------------------Ingrediente Asociado
router.use('/api/ingredienteAsociado', ingredienteAsociadoRouter);
ingredienteAsociadoRouter.get('', getIngredienteAsociado);
//------------------Preguntas y Sugerencias
router.use('/api/preguntasSugerencias', preguntasSugerenciasRouter);
preguntasSugerenciasRouter.get('', getPreguntasSugerencias);


//se exportan las rutas(router)-----------------------------------
module.exports = router;
