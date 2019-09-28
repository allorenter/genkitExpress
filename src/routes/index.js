import express from "express";
import Propiedades from "../utils/Propiedades";

var router = express.Router();

router.get("/conexion", function(req, res, next) {
  res.send({ conexion: "Conexión Correcta" });
});

router.get("/propiedades", function(req, res, next) {
  res.send({ listaPropiedades: Propiedades.propiedades });
});

export default router;
