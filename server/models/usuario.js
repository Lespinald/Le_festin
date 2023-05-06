const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  ID_usuario: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
