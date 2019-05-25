import express from 'express';
import bodyParser from 'body-parser';
import jsonSchema from 'jsonschema';

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
    res.send('buscarUsuarios');
}

function incluirUsuario (req, res, next) {
    res.send('incluirUsuario');
}

function buscarUsuario (req, res, next) {
    res.send('buscarUsuario');
}

function alterarUsuario (req, res, next) {
    res.send('alterarUsuario');
}

function excluirUsuario (req, res, next) {
    res.send('excluirUsuario');
}

export default usuarioRouter;
