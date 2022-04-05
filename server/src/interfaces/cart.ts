import { Document, Model } from 'mongoose';
import { IInventory } from './inventory';

export interface ICart extends Document {
  id: string;
  table: string;
  client: string;
  paymentStatus: {
    method: string;
    paid: boolean;
    id: string;
  };
  comment: string;
  totalPayment: number;
  meals: Array<IInventory>;
}

export interface ICartModel extends Model<ICart> {
  createNewFromRequestBody(cart: ICart, id: number | string): Promise<any>;
  getLength(): Promise<number>;
  confirmPayment(id: string): Promise<void>;
}
