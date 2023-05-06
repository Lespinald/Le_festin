const mongoose = require('mongoose');

const IngredienteAsociadoSchema = new mongoose.Schema({
  ID_ingrediente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingrediente',
    required: true
  },
  ID_receta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Receta',
    required: true
  }
});

const IngredienteAsociado = mongoose.model('IngredienteAsociado', IngredienteAsociadoSchema);

module.exports = IngredienteAsociado;
