//GENERAMOS LAS RESPUESTAS PARA LOS DATOS GENERADOS
import Generar from "../utils/Generar";
import Respuesta from "../utils/Respuestas";
import jwt from "../utils/JWT";
import Database from "../utils/Database";

const controllerDatos = {
  getDatos: function(listaPropiedades, cantidadObjetos, token, callback) {
    if (jwt.verificarToken(token)) {
      //Tipos de datos que se guardan en bbdd
      let propiedadesBbdd=["calle","codpostal","poblacion","provincia","comunidad","nombre","apellido","segundoapellido","apellidos","sexo"]
      //Comprobamos si cantidadObjetos es un número
      isNaN(cantidadObjetos) ? (cantidadObjetos = 1) : null;
      //Obtenemos los registros de bbdd
      Database.query("SELECT * FROM datos").then(registros => {
        let arrayObjetosGenerados= [];
        //Bucle para obtener la cantidad de registros deseados
        for(let i=0; i<cantidadObjetos; i++){
          let objetoGenerado = {};
          let numAleatorio = Math.round(Math.random() * (registros.length - cantidadObjetos) + cantidadObjetos);
          //Recorremos las propiedades seleccionadas para añadirlas al nuevo objeto
          listaPropiedades.forEach(propiedad => {
            /*Sobreescribimos numaleatorio en caso de que la propiedad no sea sexo o nombre para que el sexo
             y el nombre sigan relacionadas. En caso de que no esté elegido el sexo, no será necesario que estén
             relacionados y también sobreescrimos numaleatorio para poder tener nombres distintos.
            */
           numAleatorio=(propiedad.nombreTipo!=='sexo' && (propiedad.nombreTipo!=='nombre'||!listaPropiedades.find(item=>item.nombreTipo==="sexo")))
              ?Math.round(Math.random() * (registros.length - cantidadObjetos) + cantidadObjetos)
              :numAleatorio;
            if (propiedadesBbdd.indexOf(propiedad.nombreTipo.toLowerCase()) != -1){
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
