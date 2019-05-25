import express from 'express';
import bodyParser from 'body-parser';
import jsonSchema from 'jsonschema';

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
    res.send('buscarTechshots');
}

function incluirTechshot (req, res, next) {
    res.send('incluirTechshot');
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
