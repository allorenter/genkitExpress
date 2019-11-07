import jsonwebtoken from "jsonwebtoken";

const passJWT = "mipassJWT";

const jwt = {
  generarToken: function(nombre) {
    return jsonwebtoken.sign({ nombre: nombre }, passJWT);
  },

  verificarToken: function(token) {
    try {
      return jsonwebtoken.verify(token, passJWT);
    } catch (e) {
      return false;
    }
  },

};

export default jwt;
