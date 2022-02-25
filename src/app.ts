import dotenv from 'dotenv';
import express from 'express';
import userController from './controllers/userController';

dotenv.config();

const app = express();

app.use(express.json());
app.post('/users', userController.create);

export default app;
