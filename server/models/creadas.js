const mongoose = require('mongoose');

const CreadasSchema = new mongoose.Schema({
  ID_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuarios',
    required: true
  },
  ID_receta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Receta',
    required: true
  }
});

const Creadas = mongoose.model('Creadas', CreadasSchema);

module.exports = Creadas;
