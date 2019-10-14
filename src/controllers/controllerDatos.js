//GENERAMOS LAS RSPUESTAS PARA LOS DATOS GENERADOS

import { tablaDatos } from "../utils/BBDD";
import Generar from "../utils/Generar";
import Propiedades from "../utils/Propiedades";
import ObjetoGenerado from "../models/ObjetoGenerado";
import Respuesta from "../utils/Respuestas";
import jwt from "../utils/JWT";

const controllerDatos = {
  getPruebaOrden: function() {
    return Propiedades.ordenarObjeto();  
  },

  getPropiedades: function(token) {
    if (jwt.verificarToken(token)) {
      return Respuesta.success({ listaPropiedades: Propiedades.propiedades });
    } else {
      return Respuesta.error(401, "Token inválido");
    }
  },

  getDatos: function(listaPropiedades, cantidadObjetos, token, callback) {
    if (jwt.verificarToken(token)) {
      //Comprobamos que el objeto listaPropiedades y la consulta a BBDD no están vacios
      if (Object.keys(listaPropiedades).length !== 0) {
        //Creamos la consulta que hay que hacer a la bbdd
        let consultaBBDD = Propiedades.generarConsulta(listaPropiedades);
        if (consultaBBDD != "") {
          //Comprobamos si cantidadObjetos es un número
          isNaN(cantidadObjetos) ? (cantidadObjetos = 1) : null;
          //Consultamos el total de registros a BBDD
          tablaDatos.count().then(totalRegistros => {
            let numAleatorio = Math.round(
              Math.random() * (totalRegistros - cantidadObjetos) +
                cantidadObjetos
            );
            //Consultamos la cantidad de objetos que pedimos
            tablaDatos
              .datos(consultaBBDD, numAleatorio, cantidadObjetos)
              .then(resultDatos => {
                //Instanciamos un nuevo objeto con las propiedades pedidas, incluidas las generadas por funciones
                resultDatos = resultDatos.map(objeto => {
                  let obj=  new ObjetoGenerado(objeto, listaPropiedades);
                  return Propiedades.ordenarObjeto(listaPropiedades, obj);
                });
                //Devolvemos la lista de objetos generados
                return callback(Respuesta.success(resultDatos));
              });
          });
          //Cuando no queremos que el objeto generado tenga propiedades que estén guardadas en BBDD, debemos crear el array devuelto mediante un bucle
        } else {
          let listaObjetos = [];
          for (let i = 0; i < cantidadObjetos; i++) {
            listaObjetos.push(new ObjetoGenerado({}, listaPropiedades));
          }
          return callback(Respuesta.success(listaObjetos));
        }
      } else {
        return callback(
          Respuesta.error(
            400,
            "Debe incluir la lista de propiedades en el body de la petición"
          )
        );
      }
    } else {
      return callback(Respuesta.error(401, "Token inválido"));
    }
  },

  getMovil: function() {
    return Respuesta.success({ telfMovil: Generar.telfMovil() });
  },

  getDni: function() {
    return Respuesta.success({ dni: Generar.dni() });
  },

  getCadena: function(longitudCadena) {
    isNaN(longitudCadena) ? (longitudCadena = 8) : null;
    return Respuesta.success({ cadena: Generar.cadena(longitudCadena) });
  },

  getNumAleatorio: function(numMin, numMax) {
    isNaN(numMin) ? (numMin = 1) : null;
    isNaN(numMax) ? (numMax = 10) : null;
    return Respuesta.success({ numero: Generar.numAleatorio(numMin, numMax) });
  }
};

export default controllerDatos;
