import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//DEFINIMOS LOS ARCHIVOS DE RUTAS
import indexRouter from './routes/index';
import datosRouter from './routes/routesDatos';
import usersRouter from './routes/routesUsers';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/datos', datosRouter);

export default app;
