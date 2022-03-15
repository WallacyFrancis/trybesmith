import { Router } from 'express';
import createUser from '../controllers/users';
import * as ValidateUser from '../middlewares/userValidation';

const router = Router();

router.post(
  '/',
  ValidateUser.validateName,
  ValidateUser.validateClasse,
  ValidateUser.validateLevel,
  ValidateUser.valdatePassword,
  createUser,
);

export default router;