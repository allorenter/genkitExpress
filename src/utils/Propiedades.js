//ARCHIVO CON FUNCIONES REFERENTES A LAS PROPIEDADES DE LOS OBJETOS GENERADOS

import Propiedad from "../utils/Propiedad";

const propiedades = {
  propiedades: {
    nombre: new Propiedad(
      "nombre",
      "Nombre",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    primerApellido: new Propiedad(
      "primerApellido",
      "Primer Apellido",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    segundoApellido: new Propiedad(
      "segundoApellido",
      "Segundo Apellido",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    apellidos: new Propiedad(
      "apellidos",
      "Apellidos",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    sexo: new Propiedad("sexo", "h", false, null, 0, "DatosPersonales"),
    codPostal: new Propiedad(
      "codPostal",
      "Código Postal",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    calle: new Propiedad("calle", "Calle", false, null, 0, "DatosPersonales"),
    poblacion: new Propiedad(
      "poblacion",
      "Población",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    provincia: new Propiedad(
      "provincia",
      "Provincia",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    comunidad: new Propiedad(
      "comunidad",
      "Comunidad Autónoma",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    dni: new Propiedad("dni", "Dni", false, null, 0, "DatosPersonales"),
    telfMovil: new Propiedad(
      "telfMovil",
      "Teléfono Móvil",
      false,
      null,
      0,
      "DatosPersonales"
    ),
    cadenaAleatoria: new Propiedad(
      "cadenaAleatoria",
      "Cadena aleatoria",
      false,
      { longitud: 8 },
      0,
      "DatosPersonales"
    ),
    numAleatorio: new Propiedad(
      "numAleatorio",
      "Número Aleatorio",
      false,
      { numMin: 1, numMax: 10 },
      0,
      "DatosPersonales"
    )
  },

  generarConsulta: function(listaPropiedades) {
    let consulta = "";
    //definimos los nombres de las propiedades que guardamos en bbdd
    const propiedadesBbdd = [
      "calle",
      "codpostal",
      "poblacion",
      "provincia",
      "comunidad",
      "nombre",
      "primerapellido",
      "segundoapellido",
      "apellidos",
      "sexo"
    ];
    //variable para comprobar si la propiedad que recorremos en el bucle es la primera y así crear correctamente la consulta al concatenar las ,
    let i = 0;

    for (const keyPropiedad in listaPropiedades) {
      if (listaPropiedades.hasOwnProperty(keyPropiedad)) {
        const propiedad = listaPropiedades[keyPropiedad];
        if (
          propiedadesBbdd.indexOf(keyPropiedad.toLowerCase()) != -1 &&
          propiedad.seleccionada === true
        ) {
          if (i == 0) {
            consulta = keyPropiedad.toLowerCase();
            i++;
          } else {
            consulta += ", " + keyPropiedad.toLowerCase();
          }
        }
      }
    }
    return consulta;
  },
  ordenarObjeto: function(listaPropiedades, objetoGenerado) {
    let objKeys = Object.keys(listaPropiedades).sort(function(a, b) {
      if (listaPropiedades[a].orden > listaPropiedades[b].orden) {
        return 1;
      }
      if (listaPropiedades[a].orden < listaPropiedades[b].orden) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    let newObject = {};
    objKeys.forEach(key => (newObject[key] = objetoGenerado[key]));
    return newObject;
  }
};

export default propiedades;
