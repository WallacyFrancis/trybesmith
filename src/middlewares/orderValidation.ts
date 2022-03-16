import { Request, Response, NextFunction } from 'express';

const messageErrors = {
  productIsRequerid: { error: 'Products is required' },
  productIsArray: { error: 'Products must be an array of numbers' },
  productNotNull: { error: 'Products can\'t be empty' },
};

const validateProducts = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  const { productIsRequerid, productIsArray, productNotNull } = messageErrors;
  if (!products) return res.status(400).json(productIsRequerid);
  if (!Array.isArray(products)) return res.status(422).json(productIsArray);
  if (products.length === 0) return res.status(422).json(productNotNull);
  next();
};

export default validateProducts;