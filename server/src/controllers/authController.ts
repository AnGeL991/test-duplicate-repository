import { Request, Response } from 'express';
import { info } from '../config';
import { Validate, ResponseProcessor, errorHandler, CreateToken } from '../utils';
import User from '../models/userModel';

const NAMESPACE = 'AUTH';

/* User Register */
export const register = async (req: Request, res: Response) => {
  const { email } = req.body;
  Validate(req, res);
  try {
    info(NAMESPACE, 'user account is sent for verification');
    const user = await User.findOne({ email });
    if (user)
      return ResponseProcessor(res).sendError({
        message: 'Email already exists'
      });
    return errorHandler(res, User.addUser(req.body));
  } catch (err: any) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};

/* User activation */
export const activation = (req: Request, res: Response) => {
  return errorHandler(res, User.addUser(res.locals.user));
};

/* User Login */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (!user)
      return ResponseProcessor(res).sendError({
        message: 'Email lub hasło są nie prawidłowe'
      });
    const validatePassword = user.comparePassword(password);
    if (!validatePassword)
      return ResponseProcessor(res).sendError({
        message: 'Email lub hasło są nie prawidłowe'
      });
    const token = CreateToken({ _id: user._id }, 31556926);
    return res.send({ token });
  } catch (err: any) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};

/* Get User by id */
export const getUser = (req: Request, res: Response) => {
  errorHandler(res, User.findById(res.locals.user));
};
/* User ForgetPassword */
export const forgetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  Validate(req, res);
  try {
    const user = await User.findOne({ email });
    if (!user)
      return ResponseProcessor(res).sendError({
        message: 'Email jest nie prawidłowy'
      });
    //const token = CreateToken({ _id: user._id }, 31556926);
  } catch (err: any) {
    return ResponseProcessor(res).sendError({ error: err.message });
  }
};
/* User resetPassword */
export const resetPassword = (req: Request, res: Response) => {
  const { newPassword } = req.body;
  Validate(req, res);
  return errorHandler(res, User.updateHashedPassword(res.locals.user, newPassword));
};
