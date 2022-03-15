import { Request, Response } from 'express';
import * as ProductsService from '../services/products';
import { Products } from '../interfaces/products';

export const create = async (req: Request, res: Response) => {
  const product: Products = await ProductsService.create(req.body);
  res.status(201).json({
    item: {
      id: product.id,
      name: product.name,
      amount: product.amount,
    },
  });
};

export const getAll = async (_req: Request, res: Response) => {
  const products = await ProductsService.getAll();
  res.status(200).json(products);
};
