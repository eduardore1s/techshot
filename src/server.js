const http = require('http');
const express = require('express');
const apiRouter = require('./api-v1/api-router');
const db = require('./db');

const app = express ();

app.use('/api/v1', apiRouter);
app.use('/', (req, res, next) => res.send('-- API Techshot --'));

// Iniciar o servidor
const porta = 8081; 
http.createServer (app).listen (porta, () => 
        console.log (`Servidor Techshot pronto na porta ${porta}`)); 
