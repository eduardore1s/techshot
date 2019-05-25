import http from 'http';
import express from 'express';
import apiRouter from './api-v1/api-router';

const app = express ();

app.use('/api/v1', apiRouter);
app.use('/', (req, res, next) => res.send('-- API Techshot --'));

// Iniciar o servidor
const porta = 8080; 
http.createServer (app).listen (porta, () => 
        console.log (`Servidor Techshot pronto na porta ${porta}`)); 





/* 

const db = require ('../db.js'); 
const automovelSchema = require ('../schemas.js');

function listaAutomovel (req, res, next) {
    db.automoveisDB.find ({_id:req.params.id}, function (err, automovel) {
        if (!err) {
            res.json (automovel);
        }
        else{
            res.status (400).send (err.message);
        }
    })
}

function listaAutomoveis (req, res, next) {
    db.automoveisDB.find ({}, function (err, lista) {
        if (!err) {
            res.json (lista);
        }
        else{
            res.status (400).send (err.message);
        }
    })
}

function insereAutomoveis (req, res, next) {
    //Validação do documento JSON recebido
    var result = jsonSchema.validate (req.body, automovelSchema);

    if (result.errors.length > 0) {
        res.status (400).send ('Erro no formato do objeto JSON');
    }
    else {
        db.automoveisDB.insert (req.body, (err, objNovo) => { 
            if (!err) {
                res.json (objNovo);
            }
            else{
                res.status (400).send (err.message);
            }        
         })
    }
}

function alteraAutomoveis (req, res, next) {
    //Validação do documento JSON recebido
    var result = jsonSchema.validate (req.body, automovelSchema);

    if (result.errors.length > 0) {
        res.status (400).send ('Erro no formato do objeto JSON');
    }
    else {
        var marca = req.body .marca
        var modelo = req.body.modelo
        var placa = req.body.placa
        var ano = req.body.ano
        var chassi = req.body.chassi

        db.automoveisDB.update ({_id:req.params.id}, {
            $set:{
                marca: marca,
                modelo: modelo,
                placa: placa,
                ano: ano,
                chassi: chassi
            }
        }, (err, objNovo) => { 
            if (!err) {
                res.status (200).send("Automovel alterado")
            }
            else{
                res.status (400).send (err.message);
            }        
         })
    }
}

function deleteAutomoveis (req, res, next) {
    db.automoveisDB.find ({_id:req.params.id}, function (err, automovel) {
        if (!err) {
            db.automoveisDB.remove({_id:req.params.id});
            res.status (200).send("Automovel excluido")
        }
        else{
            res.status (400).send (err.message);
        }
    })

   
}

 */