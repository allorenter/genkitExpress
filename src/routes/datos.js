import express from 'express';
import mysql from '../config/mysql';
import generar from '../utils/Generar';
import funcionesDatos from "../utils/FuncionesDatos";

var router = express.Router();

let arrayPropiedades=[
  {
      "nombrePropiedad": "nombre",
      "nombreMostrado": "Nombre",
      "seleccionada": true,
      "nuevoNombre": "nombre",
      "opciones": null
  },
  {
      "nombrePropiedad": "primerApellido",
      "nombreMostrado": "Primer Apellido",
      "seleccionada": true,
      "nuevoNombre": "primerApellido",
      "opciones": null
  },
  {
      "nombrePropiedad": "segundoApellido",
      "nombreMostrado": "Segundo Apellido",
      "seleccionada": true,
      "nuevoNombre": "segundoApellido",
      "opciones": null
  },
  {
      "nombrePropiedad": "apellidos",
      "nombreMostrado": "Apellidos",
      "seleccionada": false,
      "nuevoNombre": "apellidos",
      "opciones": null
  },
  {
      "nombrePropiedad": "nombreCompleto",
      "nombreMostrado": "Nombre Completo",
      "seleccionada": false,
      "nuevoNombre": "nombreCompleto",
      "opciones": null
  },
  {
      "nombrePropiedad": "dni",
      "nombreMostrado": "Dni",
      "seleccionada": false,
      "nuevoNombre": "dni",
      "opciones": null
  },
  {
      "nombrePropiedad": "nie",
      "nombreMostrado": "Nie",
      "seleccionada": false,
      "nuevoNombre": "nie",
      "opciones": null
  },
  {
      "nombrePropiedad": "email",
      "nombreMostrado": "Email",
      "seleccionada": false,
      "nuevoNombre": "email",
      "opciones": null
  },
  {
      "nombrePropiedad": "telfMovil",
      "nombreMostrado": "Teléfono Móvil",
      "seleccionada": false,
      "nuevoNombre": "telfMovil",
      "opciones": null
  },
  {
      "nombrePropiedad": "sexo",
      "nombreMostrado": "h",
      "seleccionada": false,
      "nuevoNombre": "sexo",
      "opciones": null
  },
  {
      "nombrePropiedad": "codPostal",
      "nombreMostrado": "Código Postal",
      "seleccionada": false,
      "nuevoNombre": "codPostal",
      "opciones": null
  },
  {
      "nombrePropiedad": "poblacion",
      "nombreMostrado": "Población",
      "seleccionada": false,
      "nuevoNombre": "poblacion",
      "opciones": null
  },
  {
      "nombrePropiedad": "provincia",
      "nombreMostrado": "Provincia",
      "seleccionada": false,
      "nuevoNombre": "provincia",
      "opciones": null
  },
  {
      "nombrePropiedad": "comunidad",
      "nombreMostrado": "Comunidad Autónoma",
      "seleccionada": false,
      "nuevoNombre": "comunidad",
      "opciones": null
  },
  {
      "nombrePropiedad": "calle",
      "nombreMostrado": "Calle",
      "seleccionada": false,
      "nuevoNombre": "calle",
      "opciones": null
  },
  {
      "nombrePropiedad": "cadenaAleatoria",
      "nombreMostrado": "Cadena aleatoria",
      "seleccionada": false,
      "nuevoNombre": "cadenaAleatoria",
      "opciones": null
  },
  {
      "nombrePropiedad": "usuario",
      "nombreMostrado": "Usuario",
      "seleccionada": false,
      "nuevoNombre": "usuario",
      "opciones": null
  },
  {
      "nombrePropiedad": "fecha",
      "nombreMostrado": "Fecha Aleatoria",
      "seleccionada": false,
      "nuevoNombre": "fecha",
      "opciones": null
  },
  {
      "nombrePropiedad": "matricula",
      "nombreMostrado": "Matrícula",
      "seleccionada": false,
      "nuevoNombre": "matricula",
      "opciones": null
  },
  {
      "nombrePropiedad": "tarjetaCredito",
      "nombreMostrado": "Tarjeta Crédito",
      "seleccionada": false,
      "nuevoNombre": "tarjetaCredito",
      "opciones": null
  },
  {
      "nombrePropiedad": "telfFijo",
      "nombreMostrado": "Teléfono Fijo",
      "seleccionada": false,
      "nuevoNombre": "telfFijo",
      "opciones": null
  },
  {
      "nombrePropiedad": "iban",
      "nombreMostrado": "IBAN",
      "seleccionada": false,
      "nuevoNombre": "iban",
      "opciones": null
  },
  {
      "nombrePropiedad": "numAleatorio",
      "nombreMostrado": "Número Aleatorio",
      "seleccionada": false,
      "nuevoNombre": "numAleatorio",
      "opciones": null
  },
  {
      "nombrePropiedad": "booleano",
      "nombreMostrado": "Booleano",
      "seleccionada": false,
      "nuevoNombre": "booleano",
      "opciones": null
  }
];

router.get('/prueba', function(req, res, next) {
  res.send(funcionesDatos.generarConsulta(arrayPropiedades));
});

router.get('/movil', function(req, res, next) {
  res.send(generar.telfMovil());
});

router.get('/dni', function(req, res, next) {
  res.send(generar.dni());
});

router.get('/cadena', function(req, res, next) {
  res.send({cadena: generar.cadena(4)});
});

router.get('/numero', function(req, res, next) {
  res.send({ numero: generar.numAleatorio(7, 89) })
});

export default router;
