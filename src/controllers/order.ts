import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import OrderService from '../services/order';

dotenv.config();

const decodeToken = (token: string) => {
  const result: any = jwt.verify(token, (process.env.SECRET || '1234'));
  return result.data;
};

const create = async (req: Request, res: Response) => {
  const { products } = req.body;
  const token = req.headers.authorization;
  const objToken = decodeToken((token || '1'));
  const result = await OrderService(objToken.id, products);
  res.status(201).json(result);
};

export default create;