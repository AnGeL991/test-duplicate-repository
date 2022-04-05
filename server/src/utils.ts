import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { config } from './config';
import Cart from './models/cartModel';

export const ResponseProcessor = (res: Response) => {
  const sendError = (message: string | object) => {
    res.status(500).json(message);
  };
  const sendResult = (message: string | object) => {
    res.status(200).json(message);
  };
  return { sendError, sendResult };
};

export async function errorHandler(res: Response, toRun: any, optionalBody?: any) {
  try {
    const result = await toRun;
    return ResponseProcessor(res).sendResult({ result, optionalBody });
  } catch (error: any) {
    return ResponseProcessor(res).sendError({ message: error.message, error });
  }
}

export const Validate = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error: string = errors.array().map((error) => error.msg)[0];
    return ResponseProcessor(res).sendError(error);
  }
  return;
};
export const CreateToken = (body: any, time: string | number) => {
  return jwt.sign(body, config.server.token.secret, { expiresIn: time });
};

function randomChar(length: number) {
  const chars = 'abcdefghijklmnoprstuwyz';
  let result = '';
  for (let i = 0; i >= length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export const prepareOrderId = async () => {
  const orderLenght = await Cart.getLength();
  const exist = await Cart.find({ id: `${orderLenght + 1}` });
  if (!exist) {
    return orderLenght + 1;
  } else {
    const result = randomChar(1);
    return orderLenght + 1 + result;
  }
};
