import { Router } from 'express';
import * as OrderControler from '../controllers/order';
import * as Token from '../middlewares/tokenValidation';
import * as ValidateOrder from '../middlewares/orderValidation';

const router = Router();

router.get(
  '/:id',
  Token.validate,
  ValidateOrder.validateOrder,
  OrderControler.getById,
);

router.post(
  '/',
  Token.validate,
  ValidateOrder.validateProducts,
  OrderControler.create,
);

export default router;