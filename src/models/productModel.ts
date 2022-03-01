import { ResultSetHeader } from 'mysql2';
import { ProductInput, ProductOutput } from '../interfaces/userInterface';
import connection from './connection';

const create = async (productData:ProductInput):Promise<ProductOutput> => {
  const { name, amount } = productData;
  const [product] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  
  return { id: product.insertId, name, amount };
};

const getAll = async () => {
  const [product] = await connection.execute<ResultSetHeader>('SELECT * FROM Trybesmith.Products');

  return product;
};

export default {
  create,
  getAll,
};