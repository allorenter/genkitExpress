import mysql from 'mysql';

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'genkit',
};

export default mysql.createPool(config);