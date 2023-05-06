const mongoose = require('mongoose');

const RecetaSchema = new mongoose.Schema({
  ID_receta: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  procedimiento: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: false
  }
});

const Receta = mongoose.model('Receta', RecetaSchema);

module.exports = Receta;
