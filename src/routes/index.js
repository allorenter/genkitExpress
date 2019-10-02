import express from "express";

var router = express.Router();

router.get("/conexion", function(req, res, next) {
  res.send({ conexion: "Conexión Correcta" });
});

export default router;
