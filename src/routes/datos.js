import express from "express";
import Mysql from "../config/Mysql";
import Generar from "../utils/Generar";
import Propiedades from "../utils/Propiedades";
import ObjetoGenerado from "../models/ObjetoGenerado";


var router = express.Router();

router.post('/getAll', (req, res) => {
  if(Propiedades.generarConsulta(req.body)!=""){
    Mysql.query("SELECT "+Propiedades.generarConsulta(req.body)+" FROM datos", (error, result) => {
      if (error) throw error;
      result=result.map((element)=>{
        return new ObjetoGenerado(element, req.body);
      });
      res.send(result);
    });
  }else{
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
