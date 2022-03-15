import userLogin from '../models/Login';

const login = async (username: string, password: string) => {
  const user = await userLogin(username, password);
  return user;
};

export default login;