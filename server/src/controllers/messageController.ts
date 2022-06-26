import { Request, Response } from 'express';
import { info } from '../config';
import Message from '../models/messageModel';
import { errorHandler } from '../utils';
const NAMESPACE = 'Message';

/* Add message */
export const addMessage = async (req: Request, res: Response) => {
  info(NAMESPACE, 'Message is added to database');
  errorHandler(res, Message.addMessage(req.body));
};
