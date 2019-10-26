//ARCHIVO CON FUNCIONES REFERENTES A LAS PROPIEDADES DE LOS OBJETOS GENERADOS

import Propiedad from "../utils/Propiedad";

const propiedades = {
  propiedades: {
    nombre: new Propiedad(
      "nombre",
      "nombre",
      "Nombre",
      null,
      "datosPersonales"
    ),
    apellido: new Propiedad(
      "apellido",
      "apellido",
      "Apellido",
      null,
      "datosPersonales"
    ),
    apellidos: new Propiedad(
      "apellidos",
      "apellidos",
      "Apellidos",
      null,
      "datosPersonales"
    ),
    sexo: new Propiedad("sexo", "sexo", "Sexo", null, "datosPersonales"),
    codPostal: new Propiedad(
      "codPostal",
      "codPostal",
      "Código Postal",
      null,
      "lugares"
    ),
    calle: new Propiedad("calle", "calle", "Calle", null, "lugares"),
    poblacion: new Propiedad(
      "poblacion",
      "poblacion",
      "Población",
      null,
      "lugares"
    ),
    provincia: new Propiedad(
      "provincia",
      "provincia",
      "Provincia",
      null,
      "lugares"
    ),
    comunidad: new Propiedad(
      "comunidad",
      "comunidad",
      "Comunidad",
      null,
      "lugares"
    ),
    dni: new Propiedad("dni", "dni", "Dni", null, "datosPersonales"),
    telfMovil: new Propiedad(
      "telfMovil",
      "telfMovil",
      "Teléfono Móvil",
      null,
      "datosPersonales"
    ),
    cadenaAleatoria: new Propiedad(
      "cadenaAleatoria",
      "cadenaAleatoria",
      "Cadena Aleatoria",
      { longitud: 8 },
      "otros"
    ),
    numAleatorio: new Propiedad(
      "numAleatorio",
      "numAleatorio",
      "Número Aleatorio",
      { numMin: 1, numMax: 10 },
      "otros"
    ),
    tarjetaCredito: new Propiedad(
      "tarjetaCredito",
      "tarjetaCredito",
      "Tarjeta de Crédito",
      {tipo: "cualquiera"},
      "otros"
    ),
    matricula: new Propiedad(
      "matricula",
      "matricula",
      "Matrícula",
      null,
      "otros"
    ),
    boolean: new Propiedad(
      "boolean",
      "boolean",
      "Boleano",
      null,
      "otros"
    ),
    fecha: new Propiedad(
      "fecha",
      "fecha",
      "Fecha",
      {fechaInicio: "2000-1-1", fechaFin: "2019-1-1"},
      "otros"
    )
  },
  propiedadesBbdd: [
    "calle",
    "codpostal",
    "poblacion",
    "provincia",
    "comunidad",
    "nombre",
    "apellido",
    "segundoapellido",
    "apellidos",
    "sexo"
  ],
};

export default propiedades;
