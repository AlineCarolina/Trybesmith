import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  try {
    const userCreated = await userService.create({ username, classe, level, password });
    res.status(201).json(userCreated);
  } catch (error) {
    next(error);
  }
};

export default {
  create,
};