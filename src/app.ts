import dotenv from 'dotenv';
import express from 'express';
import userController from './controllers/userController';
import loginController from './controllers/loginController';
import productsController from './controllers/productsController';
import tokenValidation from './middlewares/tokenValidation';

dotenv.config();

const app = express();

app.use(express.json());
app.post('/users', userController.create);
app.post('/login', loginController.login);
app.post('/products', tokenValidation, productsController.create);
app.get('/products', tokenValidation, productsController.getAll);

export default app;
