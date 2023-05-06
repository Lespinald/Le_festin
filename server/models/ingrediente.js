const mongoose = require('mongoose');

const IngredienteSchema = new mongoose.Schema({
  ID_ingrediente: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: false
  }
});

const Ingrediente = mongoose.model('Ingrediente', IngredienteSchema);

module.exports = Ingrediente;
