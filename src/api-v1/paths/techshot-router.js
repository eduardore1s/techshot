import express from 'express';
import bodyParser from 'body-parser';
import jsonSchema from 'jsonschema';
import techshotModel from '../models/techshot-model';

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
    res.send('buscarTechshot');
}

function alterarTechshot (req, res, next) {
    res.send('alterarTechshot');
}

function excluirTechshot (req, res, next) {
    res.send('excluirTechshot');
}
export default techshotRouter; 
