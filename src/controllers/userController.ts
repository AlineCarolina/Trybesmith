import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';
import {
  userValidation,
  classValidation,
  levelValidation,
  passwordValidation,
} from '../middlewares/userValidation'; 

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const err = userValidation(username)
  || classValidation(classe)
  || levelValidation(level)
  || passwordValidation(password);

  if (err) {
    const { code, error } = err;
    return res.status(code).json({ error });
  }

  const token = await userService.create({ username, classe, level, password });

  res.status(201).json({ token });
  next();
};

export default {
  create,
};