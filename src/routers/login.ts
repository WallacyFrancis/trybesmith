import { Router } from 'express';
import login from '../controllers/login';
import * as ValidateLogin from '../middlewares/loginValidation';

const router = Router();

router.post(
  '/',
  ValidateLogin.validateName,
  ValidateLogin.validatePassword,
  ValidateLogin.validateUser,
  login,
);

export default router;