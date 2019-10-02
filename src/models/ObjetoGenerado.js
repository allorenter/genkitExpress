//CLASE PARA INSTANCIAR LOS OBJETOS CON LOS DATOS QUE PEDIMOS Y QUE SERÁN DEVUELTOS
import Generar from "../utils/Generar";

class ObjetoGenerado {
  constructor(objetoBBDD, listaPropiedades) {
    
    //DATOS BBDD
    this[listaPropiedades.nombre.nombrePropiedad] = objetoBBDD.nombre;
    this[listaPropiedades.primerApellido.nombrePropiedad] = objetoBBDD.primerapellido;
    this[listaPropiedades.segundoApellido.nombrePropiedad] = objetoBBDD.segundoapellido;
    this[listaPropiedades.apellidos.nombrePropiedad] = objetoBBDD.apellidos;
    this[listaPropiedades.sexo.nombrePropiedad] = objetoBBDD.sexo;
    this[listaPropiedades.codPostal.nombrePropiedad] = objetoBBDD.codpostal;
    this[listaPropiedades.calle.nombrePropiedad] = objetoBBDD.calle;
    this[listaPropiedades.poblacion.nombrePropiedad] = objetoBBDD.poblacion;
    this[listaPropiedades.provincia.nombrePropiedad] = objetoBBDD.provincia;
    this[listaPropiedades.comunidad.nombrePropiedad] = objetoBBDD.comunidad;
    

    //GENERADOS POR FUNCIONES
    this[listaPropiedades.dni.nombrePropiedad] = (listaPropiedades.dni.seleccionada) ? Generar.dni() : undefined;

    this[listaPropiedades.telfMovil.nombrePropiedad] = (listaPropiedades.telfMovil.seleccionada)  
      ? Generar.telfMovil() 
      : undefined;

    this[listaPropiedades.cadenaAleatoria.nombrePropiedad] = (listaPropiedades.cadenaAleatoria.seleccionada)
      ? Generar.cadena(listaPropiedades.cadenaAleatoria.opciones.longitud)
      : undefined;

    let opcionesNumAleatorio = listaPropiedades.numAleatorio.opciones;
    this[listaPropiedades.numAleatorio.nombrePropiedad] = (listaPropiedades.numAleatorio.seleccionada)
      ? Generar.numAleatorio(opcionesNumAleatorio.numMin, opcionesNumAleatorio.numMax)
      : undefined;
      
    //this.nombreCompleto = seleccionada;
    //this.nie = nomb;
    //this.email = nombreMostrado;
    //this.usuario = nomb;
    //this.fecha = nombreMostrado;
    //this.matricula = seleccionada;
    //this.tarjetaCredito = nuevoNombre;
    //this.telfFijo = nomb;
    //this.iban = nombreMostrado;
    //this.booleano = nuevoNombre;
  }
}

export default ObjetoGenerado;
