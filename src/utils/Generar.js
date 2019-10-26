//Archivo con las funciones que usaremos para generar los datos que no están guardados en bbdd

const generar = {
  
  generar: function(propiedad){   
    return generar[propiedad.nombreTipo](propiedad.opciones);
  },

  telfMovil: function() {
    let telfMovil = "6";
    for (let i = 0; i < 8; i++) {
      telfMovil += "" + Math.floor(Math.random() * 10 + 0);
    }
    return telfMovil;
  },

  dni: function() {
    let dni = "";
    let letras = "TRWAGMYFPDXBNJZSQVHLCKEO";
    let letraDni;
    for (let i = 0; i < 8; i++) {
      dni += "" + Math.floor(Math.random() * 10 + 0);
    }
    letraDni = letras.charAt(dni % 23);
    return "" + dni + letraDni;
  },

  nie: function() {
    return "";
  },

  cadenaAleatoria: function({longitud=8}){
    longitud=parseInt(longitud);
    let caracteres="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cadenaGenerada="";
    for(let i=0;i<longitud; i++){
      cadenaGenerada+=caracteres.charAt(Math.round(Math.random() * (caracteres.length - 0) + 0))
    }
    return cadenaGenerada;
  },

  numAleatorio: function ( {numMin = 1, numMax = 10} ) {
    numMin=parseInt(numMin);
    numMax=parseInt(numMax);
    return Math.round(Math.random() * (numMax - numMin) + numMin);
  },

  tarjetaCredito: function({tipo="cualquiera"}){
    let part1;
    switch (tipo) {
      case "cualquiera":
        part1=Math.round(Math.random() * (6000 - 4000) + 4000);
        break;
      case "visa":
        part1=Math.round(Math.random() * (5000 - 4000) + 4000);
        break;
      case "mastercard":
        part1=Math.round(Math.random() * (6000 - 5000) + 5000);
        break;
      default:
        break;
    }
    let part2 = Math.round(Math.random() * (9999 - 1) + 1).toString().padStart(4, 0);
    let part3 = Math.round(Math.random() * (9999 - 1) + 1).toString().padStart(4, 0);
    let part4 = Math.round(Math.random() * (9999 - 1) + 1).toString().padStart(4, 0);
    return part1+" "+part2+" "+part3+" "+part4;  
  },

  matricula: function(){
    const consonantes = "BCDFGHJKLMNOPQRSTVWXYZ";
    const numMatricula= Math.round(Math.random() * (9999 - 1) + 1).toString().padStart(4, 0);
    const part1= consonantes.charAt(Math.round(Math.random() * (consonantes.length - 0) + 0));
    const part2= consonantes.charAt(Math.round(Math.random() * (consonantes.length - 0) + 0));
    const part3= consonantes.charAt(Math.round(Math.random() * (consonantes.length - 0) + 0));
    return numMatricula+part1+part2+part3;
  },

  boolean: function(){
    return Math.random() >= 0.5;
  },

  fecha: function( {fechaInicio = "2000-1-1", fechaFin = "2019-1-1"}){
    fechaInicio=new Date(fechaInicio);
    fechaFin=new Date(fechaFin);
    return new Date(fechaInicio.getTime() + Math.random() * (fechaFin.getTime() - fechaInicio.getTime())).toLocaleDateString();
  }
};

export default generar;
