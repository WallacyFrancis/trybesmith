import createUser from '../models/User';
import { IUser, User } from '../interfaces/users';

const create = async (user: IUser): Promise<User> => {
  const createdUser = await createUser(user);
  return createdUser;
};

export default create;