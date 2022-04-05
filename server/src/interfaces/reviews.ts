import { Document, Model } from 'mongoose';

export interface IReview extends Document {
  name: string;
  email: string;
  star: number;
  message: string;
  image: string;
  date: Date;
}

export interface IReviewModel extends Model<IReview> {
  createComment(review: IReview): Promise<void>;
  getAllCommentById(id: Array<string>): Promise<IReview[]>;
}
