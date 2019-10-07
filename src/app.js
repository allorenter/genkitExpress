import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

//DEFINIMOS LOS ARCHIVOS DE RUTAS
import indexRouter from "./routes/index";
import datosRouter from "./routes/routesDatos";
import usersRouter from "./routes/routesUsers";

const app = express();

//ALLOW CORS 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/datos", datosRouter);

export default app;
