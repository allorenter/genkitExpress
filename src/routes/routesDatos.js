//FICHERO CON LOS ENDPOINTS PARA DEVOLVER LOS DATOS GENERADOS
import express from "express";
import controllerDatos from "../controllers/controllerDatos";
import Respuesta from "../utils/Respuestas";

var router = express.Router();

router.post("/getDatos", (req, res) => {
  controllerDatos.getDatos(req.body, req.query.cantidad, function(result){
    Respuesta.enviarRespuesta(result, res);
  })
});

router.get("/getMovil", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getMovil(), res);
});

router.get("/getDni", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getDni(), res);
});

router.get("/getCadena", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getCadena(req.query.longitud), res);
});

router.get("/getNumero", function(req, res, next) {
  Respuesta.enviarRespuesta(controllerDatos.getNumAleatorio(req.query.numMin, req.query.numMax), res);
});

export default router;
