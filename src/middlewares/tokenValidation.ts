import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const messageErrors = {
  tokenNotFound: { error: 'Token not found' },
  tokenInvalid: { error: 'Invalid token' },
};

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const { tokenNotFound } = messageErrors;
    if (!token) return res.status(401).json(tokenNotFound);
    jwt.verify(token, (process.env.SECRET || '1234'));
    next();
  } catch (e) {
    const { tokenInvalid } = messageErrors;
    res.status(401).json(tokenInvalid);
  }
};

export default validateToken;