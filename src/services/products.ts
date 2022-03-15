import createProduct from '../models/Products';
import { IProducts, Products } from '../interfaces/products';

const create = async (products: IProducts): Promise<Products> => {
  const createdProducts = await createProduct(products);
  return createdProducts;
};

export default create;
