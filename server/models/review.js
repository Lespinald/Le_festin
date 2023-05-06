const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  ID_review: {
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
  review: {
    type: String,
    maxlength: 200
  }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
