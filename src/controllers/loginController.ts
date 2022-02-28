import { Request, Response, NextFunction } from 'express';
import { userValidation, passwordValidation } from '../middlewares/userValidation';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const err = userValidation(username) || passwordValidation(password);

  if (err) {
    const { code, error } = err;
    return res.status(code).json({ error });
  }

  const token = await loginService.login({ username, password });

  if (typeof token !== 'string') {
    const { code, error } = token;
    return res.status(code).json({ error });
  }

  res.status(200).json({ token });
  next();
};

export default {
  login,
};