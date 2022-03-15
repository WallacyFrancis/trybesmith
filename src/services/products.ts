import * as ProductsModel from '../models/Products';
import { IProducts, Products } from '../interfaces/products';

export const create = async (products: IProducts): Promise<Products> => {
  const createdProducts = await ProductsModel.create(products);
  return createdProducts;
};

export const getAll = async () => {
  const getProducts = await ProductsModel.getAll();
  return getProducts;
};
