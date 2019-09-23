import Propiedad from "../utils/Propiedad";

const propiedades = {

  propiedades: [
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
    new Propiedad("cadenaAleatoria", "Cadena aleatoria", false, "cadenaAleatoria", {"longitud": 8}),
    new Propiedad("usuario", "Usuario", false, "usuario", null),
    new Propiedad("fecha", "Fecha Aleatoria", false, "fecha", null),
    new Propiedad("matricula", "Matrícula", false, "matricula", null),
    new Propiedad("tarjetaCredito", "Tarjeta Crédito", false, "tarjetaCredito", null),
    new Propiedad("telfFijo", "Teléfono Fijo", false, "telfFijo", null),
    new Propiedad("iban", "IBAN", false, "iban", null),
    new Propiedad("numAleatorio", "Número Aleatorio", false, "numAleatorio", {"numMin": 1, "numMax": 10}),
    new Propiedad("booleano", "Booleano", false, "booleano", null)
  ],

  generarConsulta: function(arrayPropiedades) {
    let consulta = "";
    //guardamos los nombres de las propiedades que guardamos en bbdd
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
    arrayPropiedades.forEach(propiedad => {
      if (
        propiedadesBbdd.indexOf(propiedad.nombrePropiedad.toLowerCase()) !=
          -1 &&
        propiedad.seleccionada === true
      ) {
        if (i == 0) {
          consulta = propiedad.nombrePropiedad.toLowerCase();
          i++;
        } else {
          consulta += ", " + propiedad.nombrePropiedad.toLowerCase();
        }
      }
    });
    return consulta;
  },

  estaSeleccionada: function(arrayPropiedades, nombrePropiedad) {
    let varReturn=false;
    arrayPropiedades.forEach(propiedad => {
      if (propiedad.seleccionada === true) {
        if (propiedad.nombrePropiedad === nombrePropiedad) {
          varReturn=true;
        }
      }
    });
    return varReturn;
  },
  
  getOpciones: function (arrayPropiedades, nombrePropiedad) {
    let varReturn=null;
    arrayPropiedades.forEach(propiedad => {
      if (propiedad.seleccionada === true) {
        if (propiedad.nombrePropiedad === nombrePropiedad) {
          varReturn=propiedad.opciones;
        }
      }
    });
    return varReturn;
  }
};

export default propiedades;
