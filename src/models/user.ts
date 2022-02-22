import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { UserInterface, UserId } from '../interfaces/userInterface';

const create = async (user: UserInterface): Promise<UserId> => {
  const { username, classe, level, password } = user;
  const [{ insertId: id }] = await
  connection.execute<ResultSetHeader>(
    'INSERT INTO Users (username, classe, level, password) VALUES (?,?,?,?);',
    [username, classe, level, password],
  );
  return { id, username, classe, level, password };
};

export default {
  create,
};