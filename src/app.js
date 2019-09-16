import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import Mysql from './config/Mysql';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import datosRouter from './routes/datos';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/datos', datosRouter);

export default app;
