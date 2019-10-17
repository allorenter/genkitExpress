//GENERAMOS LAS RESPUESTAS PARA LOS DATOS GENERADOS

import { tablaDatos } from "../utils/BBDD";
import Generar from "../utils/Generar";
import Propiedades from "../utils/Propiedades";
import Respuesta from "../utils/Respuestas";
import jwt from "../utils/JWT";

const controllerDatos = {
  getDatos: function(listaPropiedades, cantidadObjetos, token, callback) {
    if (jwt.verificarToken(token)) {
      //Comprobamos si cantidadObjetos es un número
      isNaN(cantidadObjetos) ? (cantidadObjetos = 1) : null;
      //Obtenemos los registros de bbdd
      tablaDatos.todos().then(registros => {
        let arrayObjetosGenerados= [];
        for(let i=0; i<cantidadObjetos; i++){
          let objetoGenerado = {};
          listaPropiedades.forEach(propiedad => {
            let numAleatorio = Math.round(Math.random() * (registros.length - cantidadObjetos) + cantidadObjetos);        
            if (Propiedades.propiedadesBbdd.indexOf(propiedad.nombrePropiedad.toLowerCase()) != -1){
              objetoGenerado[propiedad.nombreSeleccionado]=registros[numAleatorio][propiedad.nombrePropiedad.toLowerCase()];
            }else{
              objetoGenerado[propiedad.nombreSeleccionado]=Generar[propiedad.nombrePropiedad]();
            }
          });
          arrayObjetosGenerados.push(objetoGenerado);
        }
        return callback(Respuesta.success(arrayObjetosGenerados));
      });
    } else {
      return callback(Respuesta.error(401, "Token inválido"));
    }
  },

  getPropiedades: function(token) {
    if (jwt.verificarToken(token)) {
      return Respuesta.success({ listaPropiedades: Propiedades.propiedades });
    } else {
      return Respuesta.error(401, "Token inválido");
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
