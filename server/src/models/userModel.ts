import { response } from 'express';
import { model, Schema } from 'mongoose';
import { IUserDocument, IUser, IUserModel } from '../interfaces/user';
import bcryptjs from 'bcryptjs';
import { ResponseProcessor } from '../utils';

const UserSchema = new Schema<IUserDocument, IUserModel>(
  {
    email: { type: String, required: true, trim: true, unique: true },
    name: { type: String },
    surname: { type: String },
    password: { type: String },
    contact: { type: String },
    adress: { type: String },
    city: { type: String },
    state: { type: String },
    code: { type: String },
    country: { type: String }
  },
  {
    timestamps: true
  }
);

UserSchema.statics.addUser = async function (userToAdd: IUserDocument | { email: string; regulations: boolean }) {
  const user = new this(userToAdd);
  return await user.save();
};

UserSchema.pre('save', async function (this: IUserDocument) {
  let user = this;
  try {
    const salt = await bcryptjs.genSalt(10);
    if (user.password) {
      const hashedPassword = await bcryptjs.hash(user.password, salt);
      user.password = hashedPassword;
    }
  } catch (err: any) {
    ResponseProcessor(response).sendError(err.message);
  }
});

UserSchema.methods.comparePassword = function (candidatePassword: string) {
  if (this.password) return bcryptjs.compare(candidatePassword, this.password);
  return;
};

UserSchema.statics.updateHashedPassword = async function (id: string, password: string) {
  const salt = await bcryptjs.genSalt(10);
  const newPassword = await bcryptjs.hash(password, salt);
  await this.findByIdAndUpdate(id, { password: newPassword });
};

UserSchema.statics.updateAccount = async function (_id: string, updateDate: IUser) {
  return await this.findOneAndUpdate({ _id }, { ...updateDate });
};

const UserModel = model<IUserDocument, IUserModel>('User', UserSchema);

export default UserModel;
