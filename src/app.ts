import dotenv from 'dotenv';
import express from 'express';
import userController from './controllers/userController';
import loginController from './controllers/loginController';

dotenv.config();

const app = express();

app.use(express.json());
app.post('/users', userController.create);
app.post('/login', loginController.login);

export default app;
