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
//
async login (req, res){
  var { email, senha } = req.body;

  var user = await User.findOne({ email, senha});
  //ok
  if(user){
      res.status(200).json({
          email,
          senha,
          nome: user.nome,
          sucesso: true
      });
  }else{
      res.status(500).json({
          sucesso: false
      });
  }
},


async editarUsuario(req, res){
  const { nome,email, senha, } = req.body;
  
  const sucesso = await User.findOneAndUpdate({ email}, {  
      nome,
      email, 
      senha, 
  }).then(function(result){
      return true;
  }).catch(e =>{
      return false;
  })

  if(sucesso){
      res.status(200).json({
          sucesso: true
      });
  }else{
      res.status(500).json({
          sucesso: false
      });
  }
},
//

async removerUsuario(req, res){
  const { email } = req.body;
  const sucesso = await User.findOneAndRemove({ email: email},function(err,result){
      if(err) return false;
      return true;
  });

  if(sucesso){
      res.status(200).json({
          sucesso: true
      });
  }else{
      res.status(500).json({
          sucesso: false
      });
  }
  
},


};

