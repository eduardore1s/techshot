const express = require('express');
const usuariosRouter = require('./paths/usuario-router');
const techshotsRouter = require('./paths/techshot-router');
const loginRouter = require('./paths/login-router');

const apiRouter = express.Router();

apiRouter.use('/login', loginRouter);
apiRouter.use('/usuarios', usuariosRouter);
apiRouter.use('/techshots', techshotsRouter);
apiRouter.use('/', (req, res, next) => res.send('-- API V1 - Techshot Dti --'));

module.exports = apiRouter;
