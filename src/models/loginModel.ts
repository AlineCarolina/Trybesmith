import { Login } from '../interfaces/userInterface';
import connection from './connection';

const login = async (loginData: Login): Promise<[]> => {
  const { username, password } = loginData;
  const [user] = await connection.execute(
    'SELECT username, password from Trybesmith.Users WHERE username=? AND password=?',
    [username, password],
  );
  return user as [];
};

export default {
  login,
};