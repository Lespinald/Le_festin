const mongoose = require('mongoose');

const PreguntasYSugerenciasSchema = new mongoose.Schema({
  ID_pregunta: {
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
  textoPregunta: {
    type: String,
    maxlength: 200
  },
  tipo: {
    type: String,
    maxlength: 1
  },
  textoRespuesta: {
    type: String,
    maxlength: 200
  }
});

const PreguntasYSugerencias = mongoose.model('PreguntasYSugerencias', PreguntasYSugerenciasSchema);

module.exports = PreguntasYSugerencias;
