import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userLogin from '../services/login';

dotenv.config();

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const [user] = await userLogin(username, password);
  const token = jwt.sign(
    { data: { id: user.id, username: user.username } },
    (process.env.SECRET || '1234'),
  );
  res.status(200).json({ token });
};

export default login;