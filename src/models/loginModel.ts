import { Login, UserId } from '../interfaces/userInterface';
import connection from './connection';

const login = async (loginData: Login): Promise<[]> => {
  const { username, password } = loginData;
  const [user] = await connection.execute(
    'SELECT username, password from Trybesmith.Users WHERE username=? AND password=?',
    [username, password],
  );
  return user as [];
};

const getBy = async (username:string, password:string) => {
  const [userId] = await connection.execute(
    'SELECT id FROM Trybesmith.Users WHERE username=? AND password=?',
    [username, password],
  );

  const [id] = userId as UserId[];

  return id; 
};

export default {
  login,
  getBy,
};