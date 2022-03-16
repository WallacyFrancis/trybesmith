import express from 'express';
import userRouter from './routers/users';
import loginRouter from './routers/login';
import productsRouter from './routers/products';
import orderRouter from './routers/order';

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/products', productsRouter);
app.use('/orders', orderRouter);

export default app;
