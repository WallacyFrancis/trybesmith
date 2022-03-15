import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getUser = async (username: string, password: string) => {
  const query = `SELECT id, username, password FROM Trybesmith.Users
    WHERE username = ? AND password = ?`;
  const [result] = await connection.execute<RowDataPacket[]>(
    query,
    [username, password],
  );
  return result;
};

export default getUser;