const mongoose = require('mongoose');

const FavoritosSchema = new mongoose.Schema({
  nome: String,
  id_filme: String,
  id_user: String,
 
});

module.exports =mongoose.model('Favoritos',FavoritosSchema);