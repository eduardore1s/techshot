const express = require('express');
const bodyParser = require('body-parser');
const usuarioModel = require('../models/usuario-model');

const usuarioRouter = express();

// associar o json ao objeto req.body
usuarioRouter.use (bodyParser.json()); 

// associa os parametros de URL e Body com formato urlEncoded
// ao objeto req.params
usuarioRouter.use (bodyParser.urlencoded( { extended: false } ));

usuarioRouter.get('/', buscarUsuarios); 
usuarioRouter.post('/', incluirUsuario);
usuarioRouter.get('/:id', buscarUsuario);
usuarioRouter.put('/:id', alterarUsuario);
usuarioRouter.delete('/:id', excluirUsuario); 

function buscarUsuarios (req, res, next) {
    usuarioModel.buscarUsuarios(res, (err, lista) => {
       if (!err){
           res.json (lista);
       }
       else {
           res.status(400).send(err.message);
       }
   })
}

function incluirUsuario (req, res, next) {
    usuarioModel.incluirUsuario(req, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function buscarUsuario (req, res, next) {
    console.log(req.params);
    usuarioModel.buscarUsuario(req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function alterarUsuario (req, res, next) {
    usuarioModel.alterarUsuario(req, req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function excluirUsuario (req, res, next) {
    usuarioModel.excluirUsuario(req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

module.exports = usuarioRouter;
