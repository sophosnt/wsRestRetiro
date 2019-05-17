var express  = require('express');
var app = express();
var bodyParser 	= require('body-parser');
var getRetiro = require('./Controllers/GetRetiro');

var port = '3000'

  app.use(bodyParser.json());
  app.post('/accounts/takeout', getRetiro.GetRetiro);
  app.listen(port,()=> {
    console.log('Servicio expuesto en puerto: ' + port);
  });