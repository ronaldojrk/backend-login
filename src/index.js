const express = require ('express');
const routes =require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//req.query =acessar query params (para filtro)
// req.params =acessar route params (para edição e delete)
//req.body = acessar corpo da requisição(criação ou edição de registro)
mongoose.connect('mongodb+srv://login:login@backend-z3tgc.mongodb.net/semanaapp?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cors());
app.use(routes);

app.listen(3000);
//app.listen(process.env.PORT || 3000, function() {
 // console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//});