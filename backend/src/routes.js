const express = require('express');

const routes = express.Router();





const SessionController =require('./controllers/SessionController');


routes.get('/',(req,res)=>{
  return res.json({message:"hello wordtes"});
});
routes.get('/sessions',SessionController.index);
routes.post('/sessions',SessionController.store);



  module.exports = routes;