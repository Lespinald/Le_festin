const express = require('express');
const router = express.Router();

//importan los metodos de los controladores----------------------------
const { getUsuarios, getNombreUsuarios, crearUsuario } = require('../controllers/usuariosController');
const { getRecetas, getRecetasById } = require('../controllers/recetasController');
const { getIngredientes, getIngredientesById, getIngredientesByIdList, busquedaNombre } = require('../controllers/IngredientesController');
const { getIngredienteAsociado, getIngredientesIdByRecetaID, getIngredientesByRecetaID } = require('../controllers/ingredienteAsociadoController')
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
recetasRouter.get('/id/:id', getRecetasById);
//------------------Ingredientes
router.use('/api/ingredientes', ingredientesRouter);
ingredientesRouter.get('', getIngredientes);
ingredientesRouter.get('/busquedaNombre/:nombre', busquedaNombre);
ingredientesRouter.get('/id/:id', getIngredientesById);
ingredientesRouter.get('/list/:list', getIngredientesByIdList);
//------------------Ingrediente Asociado
router.use('/api/ingredienteAsociado', ingredienteAsociadoRouter);
ingredienteAsociadoRouter.get('', getIngredienteAsociado);
ingredienteAsociadoRouter.get('/recetaid/:id', getIngredientesIdByRecetaID);
ingredienteAsociadoRouter.get('/recetaid/list/:id', getIngredientesByRecetaID);
//------------------Preguntas y Sugerencias
router.use('/api/preguntasSugerencias', preguntasSugerenciasRouter);
preguntasSugerenciasRouter.get('', getPreguntasSugerencias);


//se exportan las rutas(router)-----------------------------------
module.exports = router;
