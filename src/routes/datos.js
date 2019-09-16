import express from "express";
import Consultas from "../utils/ConsultasBBDD";
import Generar from "../utils/Generar";
import Propiedades from "../utils/Propiedades";
import ObjetoGenerado from "../models/ObjetoGenerado";

var router = express.Router();

router.post("/getAll", (req, res) => {
  if (Propiedades.generarConsulta(req.body) != "") {
    Consultas.todos(Propiedades.generarConsulta(req.body), function(result) {
      result=result.map((objeto=>{
        return new ObjetoGenerado(objeto, req.body);
      }));
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
