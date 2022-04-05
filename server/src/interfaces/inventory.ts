import { Document, Model } from 'mongoose';

export interface IInventory extends Document {
  title: string;
  image: string;
  description: string;
  type: string;
  price: string;
  ingredients: Array<string>;
}

export interface IInventoryModel extends Model<IInventory> {
  createNewFromRequestBody(product: IInventory): Promise<void>;
  findAllProduct(): Promise<void>;
  findByCategory(category: string): Promise<void>;
  addComment(id: string, comment: string): Promise<void>;
}
