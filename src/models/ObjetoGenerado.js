import Generar from "../utils/Generar";
import Propiedades from "../utils/Propiedades";

class ObjetoGenerado {
  constructor(objetoBBDD, arrayPropiedades) {
    
    //DATOD BBDD
    this.nombre = objetoBBDD.nombre;
    this.primerApellido = objetoBBDD.primerapellido;
    this.segundoApellido = objetoBBDD.segundoapellido;
    this.apellidos = objetoBBDD.apellidos;
    this.sexo = objetoBBDD.sexo;
    this.codPostal = objetoBBDD.codpostal;
    this.poblacion = objetoBBDD.poblacion;
    this.provincia = objetoBBDD.provincia;
    this.comunidad = objetoBBDD.comunidad;
    this.calle = objetoBBDD.calle;

    //GENERADOS POR FUNCIONES
    this.dni = Propiedades.estaSeleccionada(arrayPropiedades, "dni")
      ? Generar.dni()
      : undefined;

    this.telfMovil = Propiedades.estaSeleccionada(arrayPropiedades, "telfMovil")
      ? Generar.telfMovil()
      : undefined;

    this.cadenaAleatoria = Propiedades.estaSeleccionada(arrayPropiedades,"cadenaAleatoria")
      ? Generar.cadena(Propiedades.getOpciones(arrayPropiedades, "cadenaAleatoria").longitud)
      : undefined;

    let opcionesNumAleatorio = Propiedades.getOpciones(arrayPropiedades, "numAleatorio");
    this.numAleatorio = Propiedades.estaSeleccionada(arrayPropiedades,"numAleatorio")
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
