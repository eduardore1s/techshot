import express from 'express';
import usuariosRouter from './paths/usuario-router';
import techshotsRouter from './paths/techshot-router';
import loginRouter from './paths/login-router';

const apiRouter = express.Router();

apiRouter.use('/login', loginRouter);
apiRouter.use('/usuarios', usuariosRouter);
apiRouter.use('/techshots', techshotsRouter);
apiRouter.use('/', (req, res, next) => res.send('-- API V1 - Techshot Dti --'));

export default apiRouter;
