import express from 'express';
import mysql from '../config/mysql';

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('holaaa');
});

router.get('/prueba', function(req, res, next) {
  mysql.query('SELECT * FROM datos LIMIT 4534, 9', (error, result) => {
    if (error) throw error;

    res.send(result);
  });
  //res.send('prueba');
});

export default router;
