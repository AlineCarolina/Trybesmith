import { Request, Response, NextFunction } from 'express';
import { nameValidation, amountValidation } from '../middlewares/userValidation';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const err = nameValidation(name) || amountValidation(amount);

  if (err) {
    const { code, error } = err;
    return res.status(code).json({ error });
  }

  const item = await productsService.create({ name, amount });

  res.status(201).json({ item });

  next();
};

const getAll = async (_req: Request, res: Response, next: NextFunction) => { 
  const result = await productsService.getAll();

  res.status(200).json(result);

  next();
};

export default {
  create,
  getAll,
};