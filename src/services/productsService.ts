import { ProductInput } from '../interfaces/userInterface';
import productModel from '../models/productModel';

const create = async (productData: ProductInput) => {
  const product = await productModel.create(productData);

  return product;
};

export default {
  create,
};