const express = require('express');
const bodyParser = require('body-parser');
const jsonSchema = require('jsonschema');
const loginModel = require('../models/login-model');

const loginRouter = express();

// associar o json ao objeto req.body
loginRouter.use (bodyParser.json()); 

// associa os parametros de URL e Body com formato url  Encoded
// ao objeto req.params
loginRouter.use (bodyParser.urlencoded( { extended: false } ));

loginRouter.get('/', buscarLogin);

function buscarLogin (req, res, next) {
    loginModel.loginUsuario(req.query.login, req.query.senha, res, (err, lista) => {
       if (!err){
           res.json (lista);
       }
       else {
           res.status(400).send(err.message);
       }
   })
}

module.exports = loginRouter; 
