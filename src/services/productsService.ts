import { ProductInput, ProductOutput } from '../interfaces/userInterface';
import productModel from '../models/productModel';

const create = async (productData: ProductInput): Promise<ProductOutput> => {
  const product = await productModel.create(productData);

  return product;
};

export default {
  create,
};