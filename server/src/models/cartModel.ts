import { Schema, model } from 'mongoose';
import { ICart, ICartModel } from '../interfaces';

const CartSchema: Schema = new Schema({
  id: { type: String || Number, required: true },
  paymentStatus: {
    method: { type: String },
    paid: { type: Boolean },
    id: { type: String }
  },
  totalPayment: { type: Number, default: 0 },
  client: { type: String },
  meals: []
});
CartSchema.statics.createNewFromRequestBody = async function (props, id) {
  try {
    const newOrder = new this(props);
    newOrder.id = id;
    return await newOrder.save();
  } catch (err: any) {
    throw new Error(err.message);
  }
};
CartSchema.statics.getLength = async function () {
  try {
    return await this.countDocuments();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

CartSchema.statics.confirmPayment = async function (id) {
  try {
    return await this.findOneAndUpdate({ id }, { paymentStatus: { paid: true } });
  } catch (err: any) {
    throw Error(err.message);
  }
};

const CartModel = model<ICart, ICartModel>('Cart', CartSchema);
export default CartModel;
