import express from "express";
import {accionesUsuarios} from "../utils/AccionesBBDD";
import Usuario from "../models/Usuario";

var router = express.Router();

router.get('/login', function(req, res, next) {
  let usuario= new Usuario(req.query.nombre, null, req.query.contrasena);
  accionesUsuarios.login(usuario).then((result)=>{
    res.send({login:result});
  }).catch((e)=>{
    res.send(e);
  })
});

router.get('/crearUsuario', function(req, res, next) {
  let nuevoUsuario= new Usuario(req.query.nombre, req.query.email, req.query.contrasena);
  accionesUsuarios.crearUsuario(nuevoUsuario).then((usuarioCreado)=>{
    res.send({creado:usuarioCreado.protocol41, mensaje: "Usuario creado correctamente"});
  }).catch((e)=>{
    res.send(e);
  })
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
