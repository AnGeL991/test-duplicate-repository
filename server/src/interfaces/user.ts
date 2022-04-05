import { Document, Model } from "mongoose";

export interface IUser {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  contact?: string;
  adress?: string;
  city?: string;
  state?: string;
  code?: string;
  country?: string;
}
export interface IUserDocument extends IUser, Document {
  comparePassword(candidatePassword: string): boolean;
}
export interface IUserModel extends Model<IUserDocument> {
  addUser(User: IUser): Promise<void>;
  deleteUser(UserId: string): Promise<void>;
  updateHashedPassword(id: string, password: string): Promise<void>;
}
