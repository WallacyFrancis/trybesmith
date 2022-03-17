import { Router } from 'express';
import * as ProductsController from '../controllers/products';
import * as ValidateProduct from '../middlewares/productsValidation';
import * as Token from '../middlewares/tokenValidation';

const router = Router();

router.get(
  '/',
  Token.validate,
  ProductsController.getAll,
);

router.post(
  '/',
  Token.validate,
  ValidateProduct.validateName,
  ValidateProduct.validateAmount,
  ProductsController.create,
);

export default router;