import express, { Application } from 'express';
import routes from './routes/index';
import { Config } from './config';
import { ErrorHandler } from './middleware/errorHandler';
import { NotFoundHandler } from './middleware/notfound';

const server: Application = express(); 
const config: Config = new Config(); 

server.use(routes);
server.use(express.static('build')); 
server.use(NotFoundHandler.Notfound());
server.use(ErrorHandler.Logger());

server.listen(config.port, ()=>{
    console.log(`Listening on port ${config.port} on ${config.environment} mode`);
});