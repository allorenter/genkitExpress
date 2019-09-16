import Mysql from "mysql";

const pool = Mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "genkit"
});

export default pool;
