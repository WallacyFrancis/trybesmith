import { Router } from 'express';
import createProduct from '../controllers/products';
import * as ValidateProduct from '../middlewares/productsValidation';
import tokenValidation from '../middlewares/tokenValidation';

const router = Router();

router.post(
  '/',
  tokenValidation,
  ValidateProduct.validateName,
  ValidateProduct.validateAmount,
  createProduct,
);

export default router;