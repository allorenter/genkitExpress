import express from "express";
import Propiedades from "../utils/Propiedades";

var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("holaaa");
});

router.post('/pruebaPost', (req, res) => {
    return res.status(200).send(req.body);
});

router.get("/propiedades", function(req, res, next) { 
  res.send(Propiedades.propiedades);
});

export default router;
