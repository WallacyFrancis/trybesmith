import create from '../models/User';
import { IUser, User } from '../interfaces/users';

const userCreate = async (user: IUser): Promise<User> => {
  const createdUser = await create(user);
  return createdUser;
};

export default userCreate;