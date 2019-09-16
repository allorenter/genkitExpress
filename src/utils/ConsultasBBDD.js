import Mysql from "../config/Mysql";

const consultas = {
    todos: function(datosConsulta, callback) {
        Mysql.query("SELECT " + datosConsulta + " FROM datos", (error, result) => {
            if (error) throw error;
            return callback(result);
        });
    }
  
};
  
export default consultas;
  