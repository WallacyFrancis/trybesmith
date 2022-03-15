import { Request, Response, NextFunction } from 'express';
import userLogin from '../services/login';

const messageErrors = {
  nameIsRequired: { error: 'Username is required' },
  passwordIsRequired: { error: 'Password is required' },
  userNotFound: { error: 'Username or password invalid' },
};

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const { nameIsRequired } = messageErrors;
  if (!username) return res.status(400).json(nameIsRequired);
  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const { passwordIsRequired } = messageErrors;
  if (!password) return res.status(400).json(passwordIsRequired);
  next();
};

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = await userLogin(username, password);
  const { userNotFound } = messageErrors;
  if (user.length === 0) return res.status(401).json(userNotFound);
  next();
};
