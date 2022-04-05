import { Router } from "express";
import { extractJWT } from "../middlewares";
import { validate } from "../validator";
import { AuthController } from "../controllers";

const router = Router();
const { register, login, getUser, activation, forgetPassword, resetPassword } =
  AuthController;

const {
  validateLogin,
  validateSign,
  resetPasswordValidator,
  forgetPasswordValidator,
} = validate;
router.get("/users/validate-Token", extractJWT, getUser);
router.post("/users/register", validateSign, register);
router.post("/users/login", validateLogin, login);
router.post("/users/activation", extractJWT, activation);
router.post("/users/forgetPassword", forgetPasswordValidator, forgetPassword);
router.post(
  "/users/resetPassword",
  resetPasswordValidator,
  extractJWT,
  resetPassword
);

export = router;
