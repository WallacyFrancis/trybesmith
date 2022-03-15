import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, User } from '../interfaces/users';

const create = async (user: IUser): Promise<User> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [username, classe, level, password],
  );
  return {
    id: result.insertId,
    username: user.username,
    classe: user.classe,
    level: user.level,
    password: user.password,
  };
};

export default create;