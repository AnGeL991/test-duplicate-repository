import { Request, Response } from 'express';
import Inventory from '../models/inventoryModel';
import { errorHandler } from '../utils';

export const addMeal = (req: Request, res: Response) => {
  errorHandler(res, Inventory.createNewFromRequestBody(req.body));
};

export const getAllMeals = (req: Request, res: Response) => {
  errorHandler(res, Inventory.findAllProduct());
};

export const addComment = (req: Request, res: Response) => {
  const { id, comment } = req.body;
  errorHandler(res, Inventory.addComment(id, comment));
};
export const getMealById = (req: Request, res: Response) => {
  const { wishId } = req.body;
  errorHandler(res, Inventory.find({ _id: [...wishId] }));
};
