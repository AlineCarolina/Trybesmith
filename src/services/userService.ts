import jwt from 'jsonwebtoken';
import { UserInterface } from '../interfaces/userInterface';
import userModel from '../models/userModel';

const SECRET = 'SECRET';

const create = async (user: UserInterface): Promise<string> => {
  const { username, classe, level, password } = user;
  const result = await userModel.create({ username, classe, level, password });
  const token = jwt.sign(result, SECRET, { algorithm: 'HS256', expiresIn: '7d' });
  return token;
};

export default {
  create,
};