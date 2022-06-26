import { Document, Model } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  message: string;
}

export interface IMessageModel extends Model<IMessage> {
  addMessage(message: IMessage): any;
}
