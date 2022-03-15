import { Request, Response } from 'express';
import createProduct from '../services/products';
import { Products } from '../interfaces/products';

const create = async (req: Request, res: Response) => {
  const product: Products = await createProduct(req.body);
  res.status(201).json({
    item: {
      id: product.id,
      name: product.name,
      amount: product.amount,
    },
  });
};

export default create;