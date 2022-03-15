import { Router } from 'express';
import * as ProductsController from '../controllers/products';
import * as ValidateProduct from '../middlewares/productsValidation';
import tokenValidation from '../middlewares/tokenValidation';

const router = Router();

router.get(
  '/',
  tokenValidation,
  ProductsController.getAll,
);

router.post(
  '/',
  tokenValidation,
  ValidateProduct.validateName,
  ValidateProduct.validateAmount,
  ProductsController.create,
);

export default router;