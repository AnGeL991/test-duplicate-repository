import { Schema, model } from 'mongoose';
import { IMessage, IMessageModel } from '../interfaces/message';

const MessageSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    guests: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

MessageSchema.statics.addMessage = async function (messageToAdd: IMessage) {
  const message = new this(messageToAdd);
  return await message.save();
};

const MessageModel = model<IMessage, IMessageModel>('Message', MessageSchema);

export default MessageModel;
