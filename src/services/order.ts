import OrderModel from '../models/Order';

const create = async (userId: number, products: number[]) => {
  const result = await OrderModel(userId, products);
  return result;
};

export default create;
