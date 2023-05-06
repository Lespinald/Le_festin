const mongoose = require('mongoose');

const FavoritoSchema = new mongoose.Schema({
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

const Favorito = mongoose.model('Favorito', FavoritoSchema);

module.exports = Favorito;
