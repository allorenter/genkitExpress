//FICHERO CON ENDPOINTS REFERENTES A LOS USUARIOS
import express from "express";
import controllerUsers from "../controllers/controllerUsers";
import Respuesta from "../utils/Respuestas";

var router = express.Router();

router.post("/login", function(req, res, next) {
  controllerUsers.login(req.body.nombreUsuario, req.body.contrasena, function(
    result
  ) {
    Respuesta.enviarRespuesta(result, res);
  });
});

router.post("/crearUsuario", function(req, res, next) {
  controllerUsers.crearUsuario(
    req.body.nombreUsuario,
    req.body.email,
    req.body.contrasena,
    function(result) {
      Respuesta.enviarRespuesta(result, res);
    }
  );
});

router.get("/usuarioExiste", function(req, res, next) {
  controllerUsers.usuarioExiste(req.query.nombreUsuario, function(result) {
    Respuesta.enviarRespuesta(result, res);
  });
});

router.get("/comprobarToken", function(req, res, next) {
  controllerUsers.comprobarToken(req.headers["authorization"], function(result) {
    Respuesta.enviarRespuesta(result, res);
  });
});

router.get("/getConfigHome", function(req, res, next) {
  console.log(req.headers["authorization"]);
  
  controllerUsers.getConfigHome(req.headers["authorization"], function(result) {
    Respuesta.enviarRespuesta(result, res);
  });
});

router.post("/subirAvatar", function(req, res, next) {
  controllerUsers.subirAvatar(req, res, function(result) {
    Respuesta.enviarRespuesta(result, res);
  });
});

router.get("/getAvatar", function(req, res, next) {
  controllerUsers.getAvatar(req.headers["authorization"], function(result) {
    Respuesta.enviarRespuesta(result, res);
  });
});

export default router;
