import express from 'express';
import Server from './services/server.service';

const app = express();

Server.config(app);
Server.addRouting(app);
Server.addMiddleware(app);
Server.startServer(app);
