import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, UserInterface } from '../interfaces/userInterface';

const create = async (user: UserInterface): Promise<User> => {
  const { username, classe, level, password } = user;
  const [{ insertId }] = await
  connection.execute<ResultSetHeader>(
    'INSERT INTO Users (username, classe, level, password) VALUES (?,?,?,?);',
    [username, classe, level, password],
  );
  const createdUser: User = { id: insertId, username, classe, level, password };

  return createdUser;
};

export default {
  create,
};