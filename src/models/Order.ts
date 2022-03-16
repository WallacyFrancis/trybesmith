import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const create = async (userId: number, products: number[]) => {
  const query = `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`;
  await connection.execute<ResultSetHeader>(query, [userId]);
  return {
    order: { userId, products },
  };
};

export default create;
