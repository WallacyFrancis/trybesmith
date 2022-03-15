import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userCreate from '../services/users';
import { User } from '../interfaces/users';

dotenv.config();

const create = async (req: Request, res: Response) => {
  const user: User = await userCreate(req.body);
  const token = jwt.sign(
    { data: { id: user.id, username: user.username } },
    (process.env.SECRET || '1234'),
  );
  res.status(201).json({ token });
};

export default create;