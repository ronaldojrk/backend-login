const Favoritos = require ('../models/Favoritos');
module.exports ={
  async store(req,res){
    const {nome} = req.body;
    const {id_filme} = req.body;
    const {id_user} = req.body;
  
    const favoritos =  await Favoritos.create ({nome,id_filme,id_user});
    
  
    
    return res.json(favoritos);
  },
  async index(req,res){
    const favoritos = await Favoritos.find();
    return res.json(favoritos);
  },

  async favo(req,res){
    var {user } = req.query;

  var favoritos = await Favoritos.find({ id_user:user});

    
    return res.json(favoritos);
  },



  async removerFavoritos(req, res){
    const { nome,id_filme,id_user } = req.body;
    const sucesso = await Favoritos.findOneAndDelete({ nome,id_filme,id_user},function(err,result){
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