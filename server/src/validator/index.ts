import { check } from "express-validator";

const validateSign = [
  check("email").isEmail().withMessage("Must be a valid email adress"),
];
const validateLogin = [
  check("email").isEmail().withMessage("Must be a valid email adress"),
  check("password", "password is required").notEmpty(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters"),
];

const forgetPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid email address"),
];

const resetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];
export const validate = {
  validateLogin,
  validateSign,
  forgetPasswordValidator,
  resetPasswordValidator,
};
