const express = require('express');
const bodyParser = require('body-parser');
const techshotModel = require('../models/techshot-model');

const techshotRouter = express();

// associar o json ao objeto req.body
techshotRouter.use (bodyParser.json());

// associa os parametros de URL e Body com formato urlEncoded
// ao objeto req.params
techshotRouter.use (bodyParser.urlencoded( { extended: false } ));

techshotRouter.get('/', buscarTechshots); 
techshotRouter.post('/', incluirTechshot);
techshotRouter.get('/:id', buscarTechshot);
techshotRouter.put('/:id', alterarTechshot);
techshotRouter.delete('/:id', excluirTechshot); 
techshotRouter.get('/:id/votos', buscarTechshotVotos); 
techshotRouter.post('/:id/votos', incluirTechshotVoto);

function buscarTechshots (req, res, next) {
    techshotModel.buscarTechshots(res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function incluirTechshot (req, res, next) {
    techshotModel.incluirTechshot(req, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function buscarTechshot (req, res, next) {
    techshotModel.buscarTechshot(req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function alterarTechshot (req, res, next) {
    techshotModel.alterarTechshot(req, req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function excluirTechshot (req, res, next) {
    techshotModel.excluirTechshot(req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function buscarTechshotVotos (req, res, next) {
    techshotModel.buscarTechshotVotos(req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

function incluirTechshotVoto (req, res, next) {
    techshotModel.incluirTechshotVoto(req, req.params.id, res, (err, lista) => {
        if (!err){
            res.json (lista);
        }
        else {
            res.status(400).send(err.message);
        }
    })
}

module.exports = techshotRouter; 
