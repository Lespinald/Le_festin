const express = require('express');
const router = express.Router();

//importan los metodos de los controladores----------------------------
const { getUsuarios, getNombreUsuarios, crearUsuario, vefificarUsuario, cantidadRecetasFavoritasUsuario, cantidadRecetasUsuario } = require('../controllers/usuariosController');

const { getRecetas, getRecetasById , getRecetasbyIngredientes, createRecetas, getRecetasRecomendadas } = require('../controllers/recetasController');
const { getRecetas, getRecetasById , getRecetasbyIngredientes, createRecetas, getRecetasByIdUsuario, deleteRecetasById, getRecetasRecomendadas} = require('../controllers/recetasController');
const { getIngredientes, getIngredientesById, getIngredientesByIdList, busquedaNombre } = require('../controllers/IngredientesController');
const { getIngredienteAsociado, getIngredientesIdByRecetaID } = require('../controllers/ingredienteAsociadoController')
const { getPreguntasSugerencias } = require('../controllers/preguntasySugerenciasController');
const { getComentarios, postComentario, getComentariosbyReceta } = require ('../controllers/comentariosController');
const { getPromedioReviewByRecetaID, postReview, getReviewsAll, verificarReview, getReviewByUserRecetaID } = require('../controllers/reviewController');
const { postFavoritos, getVerificarFavoritos, deleteFavoritos,favoritosByIngredientes, getFavoritos } = require ('../controllers/favoritosController');
const { getVisualizaciones, postVisualizacion, updateVisualization } = require('../controllers/visualizaciones');

//se definen los objetos de enrutamiento-----------------------------
const usuariosRouter = express.Router();
const recetasRouter = express.Router();
const ingredientesRouter = express.Router();
const ingredienteAsociadoRouter = express.Router();
const preguntasSugerenciasRouter = express.Router();
const comentariosRouter = express.Router();
const reviewsRouter = express.Router();
const favoritosRouter = express.Router();
const visualizacionesRouter = express.Router();

//se definen las rutas----------------------------------------------
router.get('/api', (req, res) => {
    res.json("API")
})
//------------------Usuarios
router.use('/api/usuarios', usuariosRouter);
usuariosRouter.get('', getUsuarios);
usuariosRouter.get('/nombres', getNombreUsuarios);
usuariosRouter.post('/crear', crearUsuario);
usuariosRouter.get('/verificar/:id', vefificarUsuario);
usuariosRouter.get('/cantidadRecetas/:id', cantidadRecetasUsuario);
usuariosRouter.get('/cantidadFavoritos/:id', cantidadRecetasFavoritasUsuario);
//------------------Recetas
router.use('/api/recetas', recetasRouter);
recetasRouter.get('', getRecetas);
recetasRouter.get('/id/:id', getRecetasById);
recetasRouter.get('/ingredientes/:ingredientes', getRecetasbyIngredientes);
recetasRouter.post('/createRecetas', createRecetas);
recetasRouter.get('/recomendadas', getRecetasRecomendadas);
recetasRouter.get('/recetasByUsuarioId/:id_usuario', getRecetasByIdUsuario);
recetasRouter.delete('/deleteByRecetaId/:id_receta', deleteRecetasById);
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
//------------------Preguntas y Sugerencias
router.use('/api/preguntasSugerencias', preguntasSugerenciasRouter);
preguntasSugerenciasRouter.get('', getPreguntasSugerencias);
//------------------Comentarios
router.use('/api/comentarios', comentariosRouter);
comentariosRouter.get('', getComentarios);
comentariosRouter.get('/recetaid/:id_receta', getComentariosbyReceta);
comentariosRouter.post('/crearComentario',postComentario);
//------------------Reviews
router.use('/api/review', reviewsRouter);
reviewsRouter.get('/promedio/id/:id', getPromedioReviewByRecetaID);
reviewsRouter.post('/crearReview', postReview);
reviewsRouter.get('', getReviewsAll);
reviewsRouter.get('/verificar/:id_usuario/:id_receta', verificarReview);
reviewsRouter.get('/usuarioRecetaID/:id_usuario/:id_receta', getReviewByUserRecetaID);
//------------------Favoritos
router.use('/api/favoritos', favoritosRouter);
favoritosRouter.post('/crear/:id_usuario/:id_receta', postFavoritos);
favoritosRouter.delete('/borrar/:id_usuario/:id_receta', deleteFavoritos);
favoritosRouter.get('/verificar/:id_usuario/:id_receta', getVerificarFavoritos);
favoritosRouter.get('/favoritosByIngredientes/:ingredientes/:id_usuario', favoritosByIngredientes);
favoritosRouter.get('/obtener/:uid', getFavoritos);
//------------------Visualizaciones
router.use('/api/visualizaciones', visualizacionesRouter);
visualizacionesRouter.get('', getVisualizaciones);
visualizacionesRouter.post('/crear', postVisualizacion);
visualizacionesRouter.post('/update', updateVisualization);


//se exportan las rutas(router)-----------------------------------
module.exports = router;
