import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const server = app.listen(process.env.PORT, () => console.log(
  `Server is running on PORT: ${process.env.PORT}`,
));

app.post('/users');

export default server;
