import jsonwebtoken from "jsonwebtoken";

const passJWT = "mipassJWT";

const jwt = {
  generarToken: function(user) {
    return jsonwebtoken.sign({ nombre: user.nombre }, passJWT);
  },
  verificarToken: function(token) {
    try{
        return jsonwebtoken.verify(token, passJWT);
    }catch(e){
        return false;
    }
  }
};

export default jwt;
