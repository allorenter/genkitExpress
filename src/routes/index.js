import express from "express";
import Mysql from "../config/Mysql";
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

router.get("/prueba", function(req, res, next) {
  Mysql.query("SELECT * FROM datos LIMIT 4534, 9", (error, result) => {
    if (error) throw error;

    res.send(result);
  });
  //res.send('prueba');
});

export default router;
