import { Request, Response, NextFunction } from 'express';

const messageErrors = {
  nameIsRequired: { error: 'Name is required' },
  nameIsString: { error: 'Name must be a string' },
  nameIsShort: { error: 'Name must be longer than 2 characters' },
  amountIsRequeired: { error: 'Amount is required' },
  amountIsString: { error: 'Amount must be a string' },
  amountIsShort: { error: 'Amount must be longer than 2 characters' },
};

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  const { nameIsRequired, nameIsString, nameIsShort } = messageErrors;
  if (!name) return res.status(400).json(nameIsRequired);
  if (typeof name !== 'string') return res.status(422).json(nameIsString);
  if (name.length < 3) return res.status(422).json(nameIsShort);
  next();
};

export const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  const { amountIsRequeired, amountIsString, amountIsShort } = messageErrors;
  if (!amount) return res.status(400).json(amountIsRequeired);
  if (typeof amount !== 'string') return res.status(422).json(amountIsString);
  if (amount.length < 3) return res.status(422).json(amountIsShort);
  next();
};