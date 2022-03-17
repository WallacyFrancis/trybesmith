import { Request, Response } from 'express';
import * as OrderService from '../services/order';
import * as Token from '../middlewares/tokenValidation';

export const create = async (req: Request, res: Response) => {
  const { products } = req.body;
  const token = req.headers.authorization;
  const objToken = Token.decode((token || '1'));
  const result = await OrderService.create(objToken.id, products);
  res.status(201).json(result);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await OrderService.getById(Number(id));
  res.status(200).json(order);
};
