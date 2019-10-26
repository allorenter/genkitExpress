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
        //Bucle para obtener la cantidad de registros deseados
        for(let i=0; i<cantidadObjetos; i++){
          let objetoGenerado = {};
          let numAleatorio = Math.round(Math.random() * (registros.length - cantidadObjetos) + cantidadObjetos);
          //Recorremos las propiedades seleccionadas para añadirlas al nuevo objeto
          listaPropiedades.forEach(propiedad => {
            //Sobreescribimos numaleatorio en caso de que la propiedad no sea sexo o nombre para que el sexo
            // y el nombre sigan relacionadas.
            numAleatorio=(propiedad.nombreTipo!=='sexo' && propiedad.nombreTipo!=='nombre')
              ?Math.round(Math.random() * (registros.length - cantidadObjetos) + cantidadObjetos)
              :numAleatorio;
            if (Propiedades.propiedadesBbdd.indexOf(propiedad.nombreTipo.toLowerCase()) != -1){
              objetoGenerado[propiedad.nombrePropiedad]=registros[numAleatorio][propiedad.nombreTipo.toLowerCase()];
            }else{
              objetoGenerado[propiedad.nombrePropiedad]=Generar.generar(propiedad);
            }
          });
          //Añadimos el objeto a la lista de objetos generados
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
    return Respuesta.success({ cadena: Generar.cadenaAleatoria({ longitud: longitudCadena}) });
  },

  getNumAleatorio: function(numMin, numMax) {
    return Respuesta.success({ numero: Generar.numAleatorio( {numMin: numMin, numMax: numMax}) });
  },

  getTarjetaCredito: function(tipo){
    return Respuesta.success({ tarjetaCredito: Generar.tarjetaCredito( { tipo: tipo } ) });
  },

  getMatricula: function(){
    return Respuesta.success({ matricula: Generar.matricula() });
  },

  getBoolean: function(){
    return Respuesta.success({ boolean: Generar.boolean() });
  },

  getFecha: function(fechaInicio, fechaFin){
    return Respuesta.success({ boolean: Generar.fecha({fechaInicio : fechaInicio, fechaFin: fechaFin}) });
  }

};

export default controllerDatos;
