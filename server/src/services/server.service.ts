import express, { Response, Request } from 'express';
import path from 'path';
import cors from 'cors';
import router from '../routers';
import { info, config } from '../config';
import { connectToDb } from '../database';
import { loggingMiddleware } from '../middlewares';
const NAMESPACE = 'Server';

class Server {
  static async config(app: any) {
    app.use(express.static(path.join('../client/build')));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    await connectToDb();
  }
  static addRouting(app: any) {
    app.use('/api', router);
    app.get('*', (req: Request, res: Response) => {
      const index = path.join(__dirname + './../../../client/build/index.html');
      res.sendFile(index);
    });
  }
  static addMiddleware(app: any) {
    app.use(loggingMiddleware);
  }
  static startServer(app: any) {
    app.listen(process.env.PORT || config.server.port, () => info(NAMESPACE, `Server is running on ${config.server.hostname}:${config.server.port}`));
  }
}

export default Server;
