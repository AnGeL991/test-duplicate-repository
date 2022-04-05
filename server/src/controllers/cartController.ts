import { Request, Response } from 'express';
import Cart from '../models/cartModel';
import { ResponseProcessor, errorHandler, prepareOrderId } from '../utils';

export const addCart = async (req: Request, res: Response) => {
  try {
    const cartId = await prepareOrderId();
    const cart = await Cart.createNewFromRequestBody(req.body, cartId);
    return ResponseProcessor(res).sendResult({ id: cartId, _id: cart._id });
  } catch (err) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};

export const getCarts = (req: Request, res: Response) => {
  const { cartId } = req.body;
  errorHandler(res, Cart.find({ _id: [...cartId] }));
};

export const confirmPayment = (req: Request, res: Response) => {
  const { id } = req.body;
  errorHandler(res, Cart.confirmPayment(id));
};
