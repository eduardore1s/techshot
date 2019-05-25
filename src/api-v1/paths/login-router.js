import express from 'express';

const loginRouter = express.Router();

loginRouter.use('/', (req, res, next) => res.send('-- Login --'));

export default loginRouter; 
