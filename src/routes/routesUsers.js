//FICHERO CON ENDPOINTS REFERENTES A LOS USUARIOS
import express from "express";
import controllerUsers from "../controllers/controllerUsers";
import Respuesta from "../utils/Respuestas";

var router = express.Router();

router.post('/login', function(req, res, next) {
  controllerUsers.login(req.query.nombre, req.query.contrasena, function(result) {
    Respuesta.enviarRespuesta(result, res);
  });
});

router.put('/crearUsuario', function(req, res, next) {
  controllerUsers.crearUsuario(req.query.nombre, req.query.email, req.query.contrasena, function(result) {
    Respuesta.enviarRespuesta(result, res);
  });
});

export default router;
