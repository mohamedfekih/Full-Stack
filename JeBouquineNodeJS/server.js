var express = require('express');
var models = require('./model.js');
require('./fixtures');


var app = express();
var cors = require('cors');
app.use(cors());
//Route de Test
app.get('/',function(res,req)
{
    console.log("Bonjour NodeJS");
    req.send("Bonjour NodeJS");
})
app.listen(8080);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var contoller = require('./controller');
app.get('/Livres', contoller.RecupererLivres);
app.get('/Livres/:categorie', contoller.RecupererLivresParCategorie);
app.get('/Livre/:Id', contoller.RecupererLivreParId);
app.get('/Categories', contoller.RecupererCategories);
app.post('/Categorie/Creer', contoller.CreerCategorie);
app.post('/Livre/Creer', contoller.CreerLivre);