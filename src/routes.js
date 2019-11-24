const express = require('express');

const routes = express.Router();





const SessionController =require('./controllers/SessionController');



routes.get('/lista',SessionController.index);
routes.post('/sessions',SessionController.store);
routes.post('/login',SessionController.login);




  module.exports = routes;