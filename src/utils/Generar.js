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
    console.log("cadenaaa");
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
  }
};

export default generar;
