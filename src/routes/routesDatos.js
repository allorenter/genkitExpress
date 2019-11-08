//FICHERO CON LOS ENDPOINTS PARA DEVOLVER LOS DATOS GENERADOS
import express from "express";
import controllerDatos from "../controllers/controllerDatos";
import Respuesta from "../utils/Respuestas";

var router = express.Router();

router.post("/getDatos", (req, res) => {  
  controllerDatos.getDatos(req.body, req.query.cantidad, req.headers['authorization'], function(result){
    Respuesta.enviarRespuesta(result, res);
  })
});

router.get("/telfMovil", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getMovil(), res);
});

router.get("/dni", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getDni(), res);
});

router.get("/cadena", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getCadena(req.query.longitud), res);
});

router.get("/numero", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getNumAleatorio(req.query.numMin, req.query.numMax), res);
});

router.get("/tarjetaCredito", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getTarjetaCredito(req.query.tipo), res);
});

router.get("/matricula", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getMatricula(), res);
});

router.get("/boolean", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getBoolean(), res);
});

router.get("/fecha", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getFecha(req.query.fechaInicio, req.query.fechaFin), res);
});

export default router;
