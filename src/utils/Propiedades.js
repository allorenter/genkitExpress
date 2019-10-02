//ARCHIVO CON FUNCIONES REFERENTES A LAS PROPIEDADES DE LOS OBJETOS GENERADOS

import Propiedad from "../utils/Propiedad";

const propiedades = {

  propiedades: {
    nombre: new Propiedad("nombre", "Nombre", false ,null),
    primerApellido: new Propiedad("primerApellido", "Primer Apellido", false, null),
    segundoApellido: new Propiedad("segundoApellido", "Segundo Apellido", false, null),
    apellidos: new Propiedad("apellidos", "Apellidos", false, null),
    sexo: new Propiedad("sexo", "h", false, null),
    codPostal: new Propiedad("codPostal", "Código Postal", false, null),
    calle: new Propiedad("calle", "Calle", false, null),
    poblacion: new Propiedad("poblacion", "Población", false, null),
    provincia: new Propiedad("provincia", "Provincia", false, null),
    comunidad: new Propiedad("comunidad", "Comunidad Autónoma", false, null),
    dni: new Propiedad("dni", "Dni", false, null),
    telfMovil: new Propiedad("telfMovil", "Teléfono Móvil", false, null, null),
    cadenaAleatoria: new Propiedad("cadenaAleatoria", "Cadena aleatoria", false, null, {"longitud": 8}),
    numAleatorio: new Propiedad("numAleatorio", "Número Aleatorio", false, null, {"numMin": 1, "numMax": 10})
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
        if (propiedadesBbdd.indexOf(keyPropiedad.toLowerCase()) !=-1 && propiedad.seleccionada === true) {
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
  }
};

export default propiedades;
