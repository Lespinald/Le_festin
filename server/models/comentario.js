const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
  ID_comentario: {
    type: Number,
    required: true,
    unique: true
  },
  ID_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios',
    required: true
  },
  username: {
    type: String,
    required: true,
    maxlength: 15
  },
  ID_receta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Receta',
    required: true
  },
  comentario: {
    type: String,
    maxlength: 200
  }
});

const Comentario = mongoose.model('Comentario', ComentarioSchema);

module.exports = Comentario;
