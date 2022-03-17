import * as OrderModel from '../models/Order';

export const create = async (userId: number, products: number[]) => {
  const order = await OrderModel.create(userId, products);
  return order;
};

export const getById = async (id: number) => {
  const order = await OrderModel.getById(id);
  return order;
};

export const getAll = async () => {
  const order = await OrderModel.getAll();
  return order;
};
