const User = require ('../models/User');
module.exports ={
async store(req,res){
  const {nome} = req.body;
  const {email} = req.body;
  const {senha} = req.body;

  const user =  await User.create ({nome,email,senha});
  

  
  return res.json(user);
},
async index(req,res){
  const users = await User.find();
  return res.json(users);
},
};

