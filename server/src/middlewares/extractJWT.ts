import { Request, Response, NextFunction } from "express";
import { config, info } from "../config";
import { ResponseProcessor } from "../utils";
import jwt from "jsonwebtoken";

const NAMESPACE = "Auth";

export const extractJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  info(NAMESPACE, "Validating Token");
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token)
      return jwt.verify(token, config.server.token.secret, (error, decoded) => {
        if (error) {
          ResponseProcessor(res).sendError(error.message);
        } else {
          res.locals.user = decoded;
          next();
        }
      });
  } catch (error) {
    ResponseProcessor(res).sendError(error.message);
    next();
  }
};
