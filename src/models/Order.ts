import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Order from '../interfaces/order';
import connection from './connection';

export const create = async (userId: number, products: number[]) => {
  const query1 = `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`;
  const [order] = await connection.execute<ResultSetHeader>(query1, [userId]);
  const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  products.forEach(async (product) => {
    await connection.execute<ResultSetHeader>(query2, [order.insertId, product]);
  });
  return {
    order: { userId, products },
  };
};

export const getById = async (id: number) => {
  const query1 = 'SELECT id, userId FROM Trybesmith.Orders WHERE id = ?';
  const query2 = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
  const [order] = await connection.execute(query1, [id]);
  const [products] = await connection.execute<RowDataPacket[]>(query2, [id]);
  const [result1] = order as unknown as Order[];
  const result2: number[] = [];
  products.forEach((product) => result2.push(product.id));
  return { ...result1, products: result2 };
};
