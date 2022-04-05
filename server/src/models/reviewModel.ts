import { Schema, model } from 'mongoose';
import { IReview, IReviewModel } from '../interfaces';

const ReviewSchema = new Schema<IReview, IReviewModel>(
  {
    name: { type: String },
    email: { type: String },
    star: { type: Number },
    message: { type: String },
    image: { type: String },
    date: { type: String }
  },
  { timestamps: true }
);

ReviewSchema.statics.createComment = async function (props) {
  try {
    const newComment = new this(props);
    await newComment.save();
    return newComment;
  } catch (err) {
    throw new Error(err.message);
  }
};
ReviewSchema.statics.getAllCommentById = async function (arrayOfId) {
  try {
    return await this.find({ _id: [...arrayOfId] });
  } catch (err) {
    throw new Error(err.message);
  }
};

const ReviewModel = model<IReview, IReviewModel>('Review', ReviewSchema);
export default ReviewModel;
