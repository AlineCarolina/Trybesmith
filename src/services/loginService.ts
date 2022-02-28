import jwt from 'jsonwebtoken';
import { Login } from '../interfaces/userInterface';
import loginModel from '../models/loginModel';

const SECRET = 'SECRET';

const loginErr = { code: 401, error: 'Username or password invalid' };

const login = async (loginData: Login) => {
  const result = await loginModel.login(loginData);
  if (result.length === 0) return loginErr;
  const [payload]: Login[] = result;
  const token = jwt.sign(payload, SECRET, { algorithm: 'HS256', expiresIn: '7d' });
  return token;
};

export default {
  login,
};