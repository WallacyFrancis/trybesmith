import getUser from '../models/Login';

const userLogin = async (username: string, password: string) => {
  const user = await getUser(username, password);
  return user;
};

export default userLogin;