import Mysql from "../config/Mysql";

const accionesDatos = {
  todos: function(datosConsulta, callback) {
    Mysql.query("SELECT " + datosConsulta + " FROM datos", (error, result) => {
      if (error) throw error;
      return callback(result);
    });
  },

  count: function() {
    return new Promise((resolve, reject) => {
      Mysql.query("SELECT COUNT(*) AS cantidad FROM datos", (error, result) => {
        if (error) throw error;
        resolve(result[0].cantidad);
      });
    });
  },

  datos: function(datosConsulta, numAleatorio, numeroObjetos) {
    return new Promise((resolve, reject) => {
      Mysql.query("SELECT "+datosConsulta+" FROM datos LIMIT "+numAleatorio+", "+numeroObjetos, (error, result) => {
        if (error) throw error;
        resolve(result);
      });
    });
  },
};

const accionesUsuarios={
  
  crearUsuario: function(usuario){
    return new Promise((resolve, reject) => {
      Mysql.query(`INSERT INTO usuarios (nombre, email, contrasena) VALUES ('${usuario.nombre}', '${usuario.email}', '${usuario.contrasena}')`, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  login: function(usuario){
    return new Promise((resolve, reject) => {
      Mysql.query(`SELECT * FROM usuarios WHERE nombre='${usuario.nombre}' AND contrasena='${usuario.contrasena}'`, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }

};

export {accionesDatos, accionesUsuarios};
