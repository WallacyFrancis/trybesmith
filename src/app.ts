import express from 'express';
import userRouter from './routers/users';
import loginRouter from './routers/login';

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/users', userRouter);

export default app;
