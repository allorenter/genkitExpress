//Archivo con las funciones que usaremos para generar los datos que no están guardados en bbdd

const generar = {
  
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

  cadenaAleatoria: function(longitudCadena){
    let caracteres="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cadenaGenerada="";
    for(let i=0;i<longitudCadena; i++){
      cadenaGenerada+=caracteres.charAt(Math.round(Math.random() * (caracteres.length - 0) + 0))
    }
    return cadenaGenerada;
  },

  numAleatorio: function (numMin, numMax) {
    return Math.round(Math.random() * (numMax - numMin) + numMin);
  }
};

export default generar;
