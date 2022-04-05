import { Request, Response } from 'express';
import Review from '../models/reviewModel';
import { errorHandler } from '../utils';

export const addComment = (req: Request, res: Response) => {
  errorHandler(res, Review.createComment(req.body));
  console.log('review');
};
export const getComments = (req: Request, res: Response) => {
  const { arrayOfId } = req.body;
  errorHandler(res, Review.getAllCommentById(arrayOfId));
};
