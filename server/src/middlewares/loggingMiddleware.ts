import { info } from "../config";
import { NextFunction, Request, Response } from "express";

const NAMESPACE = "Server";

export const loggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  info(
    NAMESPACE,
    `METHOD -[${req.method}],URL -[${req.url}], IP - [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    info(
      NAMESPACE,
      `METHOD -[${req.method}],URL -[${req.url}], IP - [${req.socket.remoteAddress}],STATUS -[${res.statusCode}]`
    );
  });
  next();
};
