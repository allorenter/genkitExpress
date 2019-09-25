//FICHERO CON LOS ENDPOINTS PARA DEVOLVER LOS DATOS GENERADOS

import express from "express";
import {accionesDatos} from "../utils/AccionesBBDD";
import Generar from "../utils/Generar";
import Propiedades from "../utils/Propiedades";
import ObjetoGenerado from "../models/ObjetoGenerado";

var router = express.Router();

router.post("/getDatos", (req, res) => {
  if (Propiedades.generarConsulta(req.body) != "") {
    let cantidad;
    req.query.cantidad ? (cantidad = req.query.cantidad) : (cantidad = 1);
    accionesDatos.count().then(totalRegistros => {
      let numAleatorio = Math.round(Math.random() * (totalRegistros - cantidad) + cantidad);
      accionesDatos.datos(Propiedades.generarConsulta(req.body), numAleatorio, cantidad).then(result => {
        result = result.map(objeto => {
          return new ObjetoGenerado(objeto, req.body);
        });
        res.send(result);
      });
    });
  }else{
    res.send(new ObjetoGenerado({}, req.body));
  }
});

router.post("/getAll", (req, res) => {
  if (Propiedades.generarConsulta(req.body) != "") {
    accionesDatos.todos(Propiedades.generarConsulta(req.body), function(result) {
      result = result.map(objeto => {
        return new ObjetoGenerado(objeto, req.body);
      });
      res.send(result);
    });
  } else {
    res.send(new ObjetoGenerado({}, req.body));
  }
});

router.get("/movil", function(req, res, next) {
  res.send(Generar.telfMovil());
});

router.get("/dni", function(req, res, next) {
  res.send(Generar.dni());
});

router.get("/cadena", function(req, res, next) {
  let longitud;
  req.query.longitud ? (longitud = req.query.longitud) : (longitud = 8);
  res.send({ cadena: Generar.cadena(longitud) });
});

router.get("/numero", function(req, res, next) {
  let numMin;
  let numMax;
  req.query.numMin ? (numMin = req.query.numMin) : (numMin = 0);
  req.query.numMax ? (numMax = req.query.numMax) : (numMax = 10);
  res.send({ numero: Generar.numAleatorio(numMin, numMax) });
});

export default router;
