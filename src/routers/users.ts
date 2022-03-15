import { Router } from 'express';
import create from '../controllers/users';
import * as ValidateUser from '../middlewares/userValidation';

const router = Router();

router.post(
  '/',
  ValidateUser.validateName,
  ValidateUser.validateClasse,
  ValidateUser.validateLevel,
  ValidateUser.valdatePassword,
  create,
);

export default router;