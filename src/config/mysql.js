import Mysql from 'mysql';

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'genkit',
};

export default Mysql.createPool(config);