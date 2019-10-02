//ARCHIVO CON TODAS LAS CONEXIONES A LA BBDD

//INSTANCIAMOS LA CONEXIÓN A LA BASE DE DATOS
import Mysql from "mysql";

const pool = Mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "genkit"
});

const tablaDatos = {
  todos: function(datosConsulta, callback) {
    pool.query("SELECT " + datosConsulta + " FROM datos", (error, result) => {
      if (error) throw error;
      return callback(result);
    });
  },

  count: function() {
    return new Promise((resolve, reject) => {
      pool.query("SELECT COUNT(*) AS cantidad FROM datos", (error, result) => {
        if (error) throw error;
        resolve(result[0].cantidad);
      });
    });
  },

  datos: function(datosConsulta, numAleatorio, numeroObjetos) {
    return new Promise((resolve, reject) => {
      pool.query("SELECT "+datosConsulta+" FROM datos LIMIT "+numAleatorio+", "+numeroObjetos, (error, result) => {
        if (error) throw error;
        resolve(result);
      });
    });
  },
};

const tablaUsuarios={
  
  crearUsuario: function(usuario){
    return new Promise((resolve, reject) => {
      pool.query(`INSERT INTO usuarios (nombre, email, contrasena) VALUES ('${usuario.nombre}', '${usuario.email}', '${usuario.contrasena}')`, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  login: function(usuario){
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM usuarios WHERE nombre='${usuario.nombre}' AND contrasena='${usuario.contrasena}'`, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  },

  usuarioExiste: function(usuario){
    return new Promise((resolve, reject) => {
      pool.query(`SELECT nombre FROM usuarios WHERE nombre='${usuario.nombre}';`, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }

};

export {tablaDatos, tablaUsuarios};
