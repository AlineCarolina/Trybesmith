import { User, UserInterface } from '../interfaces/userInterface';
import userModel from '../models/userModel';

const create = async (user: UserInterface): Promise<User> => {
  const { username, classe, level, password } = user;
  const result = await userModel.create({ username, classe, level, password });

  return result;
};

export default {
  create,
};