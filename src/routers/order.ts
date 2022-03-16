import { Router } from 'express';
import OrderControler from '../controllers/order';
import tokenValidation from '../middlewares/tokenValidation';
import ValidateOrder from '../middlewares/orderValidation';

const router = Router();

router.post(
  '/',
  tokenValidation,
  ValidateOrder,
  OrderControler,
);

export default router;