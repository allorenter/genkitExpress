import express from "express";
import mysql from "../config/mysql";
import Propiedad from "../utils/Propiedad";

var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("holaaa");
});

router.get("/propiedades", function(req, res, next) {
  const propiedades = [
    new Propiedad("nombre", "Nombre", false, "nombre", null),
    new Propiedad("primerApellido", "Primer Apellido", false, "primerApellido", null),
    new Propiedad("segundoApellido", "Segundo Apellido", false, "segundoApellido", null),
    new Propiedad("apellidos", "Apellidos", false, "apellidos", null),
    new Propiedad("nombreCompleto", "Nombre Completo", false, "nombreCompleto", null),
    new Propiedad("dni", "Dni", false, "dni", null),
    new Propiedad("nie", "Nie", false, "nie", null),
    new Propiedad("email", "Email", false, "email", null),
    new Propiedad("telfMovil", "Teléfono Móvil", false, "telfMovil", null),
    new Propiedad("sexo", "h", false, "sexo", null),
    new Propiedad("codPostal", "Código Postal", false, "codPostal", null),
    new Propiedad("poblacion", "Población", false, "poblacion", null),
    new Propiedad("provincia", "Provincia", false, "provincia", null),
    new Propiedad("comunidad", "Comunidad Autónoma", false, "comunidad", null),
    new Propiedad("calle", "Calle", false, "calle", null),
    new Propiedad("cadenaAleatoria", "Cadena aleatoria", false, "cadenaAleatoria", null),
    new Propiedad("usuario", "Usuario", false, "usuario", null),
    new Propiedad("fecha", "Fecha Aleatoria", false, "fecha", null),
    new Propiedad("matricula", "Matrícula", false, "matricula", null),
    new Propiedad("tarjetaCredito", "Tarjeta Crédito", false, "tarjetaCredito", null),
    new Propiedad("telfFijo", "Teléfono Fijo", false, "telfFijo", null),
    new Propiedad("iban", "IBAN", false, "iban", null),
    new Propiedad("numAleatorio", "Número Aleatorio", false, "numAleatorio", null),
    new Propiedad("booleano", "Booleano", false, "booleano", null)
  ];
  res.send(propiedades);
});

router.get("/prueba", function(req, res, next) {
  mysql.query("SELECT * FROM datos LIMIT 4534, 9", (error, result) => {
    if (error) throw error;

    res.send(result);
  });
  //res.send('prueba');
});

export default router;
