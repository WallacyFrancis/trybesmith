import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Order from '../interfaces/order';
import connection from './connection';

export const create = async (userId: number, products: number[]) => {
  const query1 = `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`;
  const [order] = await connection.execute<ResultSetHeader>(query1, [userId]);
  const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  const result = products.map(async (product) => {
    await connection.execute<ResultSetHeader>(query2, [order.insertId, product]);
  });
  await Promise.all(result);
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

const getProductsId = async (id: number) => {
  const query = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
  const [result] = await connection.execute<RowDataPacket[]>(query, [id]);
  return result.map((products) => products.id);
};

export const getAll = async () => {
  const query1 = 'SELECT * FROM Trybesmith.Orders';
  const [orders] = await connection.execute<RowDataPacket[]>(query1);
  const result = orders.map(async (order) => ({
    id: order.id,
    userId: order.userId,
    products: await getProductsId(order.id),
  }));
  const promise = await Promise.all(result);
  return promise;
};
