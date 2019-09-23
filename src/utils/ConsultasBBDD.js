import Mysql from "../config/Mysql";

const consultas = {
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
  }
};

export default consultas;
