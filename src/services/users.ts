import * as UserModel from '../models/User';
import { IUser, User } from '../interfaces/users';

export const create = async (user: IUser): Promise<User> => {
  const createdUser = await UserModel.create(user);
  return createdUser;
};

export const getUser = (() => console.log('ok'));