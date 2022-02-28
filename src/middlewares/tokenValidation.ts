import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import loginModel from '../models/loginModel';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });

  const decode = jwt.decode(authorization);
  if (!decode) return res.status(401).json({ error: 'Invalid token' });

  const { username, password } = decode as JwtPayload;
  const userId = await loginModel.getBy(username, password);
  req.body.id = userId.id;

  next();
};

export default tokenValidation;