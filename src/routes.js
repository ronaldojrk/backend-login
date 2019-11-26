const express = require('express');

const routes = express.Router();





const SessionController =require('./controllers/SessionController');
const FavoritosController =require('./controllers/FavoritosController');



routes.get('/lista',SessionController.index);
routes.post('/sessions',SessionController.store);
routes.post('/login',SessionController.login);

routes.get('/listafavo',FavoritosController.index);
routes.get('/listasuasfavoitas',FavoritosController.favo);
routes.post('/criarfavo',FavoritosController.store);





  module.exports = routes;