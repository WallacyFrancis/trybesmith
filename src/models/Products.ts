import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts, Products } from '../interfaces/products';

export const create = async (products: IProducts): Promise<Products> => {
  const { name, amount } = products;
  const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [name, amount],
  );
  return {
    id: result.insertId,
    name: products.name,
    amount: products.amount,
  };
};

export const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute<ResultSetHeader>(query);
  return result;
};
