import Mysql from "mysql";

const pool = Mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "genkit"
});

const database = {
  query: function(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }
};

export default database;