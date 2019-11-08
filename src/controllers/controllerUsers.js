//GENERAMOS LAS RESPUESTAS PARA USUARIOS
import Respuesta from "../utils/Respuestas";
import jwt from "../utils/JWT";
import multer from "multer";
import fs from "fs";
import Database from "../utils/Database";

const controllerUsers = {

  login: function(nombre, contrasena, callback) {
    Database.query(`SELECT * FROM usuarios WHERE nombre='${nombre}' AND contrasena='${contrasena}'`)
    .then(result => {
      if (result.length === 0) return callback(Respuesta.error(401, "Usuario o contraseña incorrectos"));
        fs.readFile("uploads/avatar/"+nombre+".png", (err, data)=>{
          //Si hay un error en la lectura del fichero, asignamos null al avatar
          if(err){
            return callback(
              Respuesta.success({ mensaje: "Login correcto",usuario: nombre,token: jwt.generarToken(nombre),avatar: null})
            );
          } 
          let base64Image = new Buffer.from(data, 'binary').toString('base64');
          let imgSrcString = `data:image/png;base64,${base64Image}`;
          return callback(
            Respuesta.success({ mensaje: "Login correcto",usuario: nombre,token: jwt.generarToken(nombre),avatar: imgSrcString})
          );
        })
    })
    .catch(e => {
      return callback(Respuesta.error(404, "Ha ocurrido un error"));
    });
  },

  crearUsuario: function(nombre, email, contrasena, callback) {
    Database.query(`INSERT INTO usuarios (nombre, email, contrasena) VALUES ('${nombre}', '${email}', '${contrasena}')`)
      .then(() => {
        return callback(
          Respuesta.success({
            mensaje: "Usuario creado correctamente",
            usuario: nombre
          })
        );
      })
      .catch(e => {
        if (e.errno == 1062) {
          return callback( Respuesta.error(400, "El nombre de usuario ya existe"));
        } else {
          return callback(Respuesta.error(404, "Ha ocurrido un error"));
        }
      });
  },

  usuarioExiste: function(nombre, callback) {
    Database.query(`SELECT nombre FROM usuarios WHERE nombre='${nombre}'`)
      .then(usuarioExiste => {
        if (usuarioExiste.length > 0) {
          return callback(
            Respuesta.success({ existe: true, mensaje: "El usuario existe" })
          );
        } else {
          return callback(
            Respuesta.success({existe: false, mensaje: "El usuario NO existe"})
          );
        }
      })
      .catch(e => {
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
      });
  },

  comprobarToken: function(token, callback) {
    if (jwt.verificarToken(token)) {
      fs.readFile("uploads/avatar/"+jwt.verificarToken(token).nombre+".png", (err, data)=>{
        //Si hay un error en la lectura del fichero, asignamos null al avatar
        if(err){
          return callback(
            Respuesta.success({ mensaje: "Token válido",avatar: null})
          );
        } 
        let base64Image = new Buffer.from(data, 'binary').toString('base64');
        let imgSrcString = `data:image/png;base64,${base64Image}`;
        return callback(
          Respuesta.success({ mensaje: "Token válido",avatar: imgSrcString})
        );
      })
    } else {
      return callback(Respuesta.error(401, "Token inválido"));
    }
  },

  getConfigHome: function(token, callback) {
    Database.query(`SELECT config FROM confighome WHERE usuario='${jwt.verificarToken(token).nombre}'`)
      .then(result => {
        if (result.length > 0) {
          return callback(Respuesta.success({ configHome: JSON.parse(result[0].config) }));
        } else {
          return callback(Respuesta.error(401, "Token inválido"));
        }
      })
      .catch(e => {
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
      });
  },

  subirAvatar: function(req, res, callback) {
    let uploadFnct = function(nombreUsuario){
      let storage = multer.diskStorage({
          destination: function (req, file, cb) {
              cb(null, 'uploads/avatar');
          },
          filename: function (req, file, cb) {
            cb(null, nombreUsuario+".png");
          }
      });
      return multer({storage: storage}).single('avatar');
    };
    let currUpload = uploadFnct(jwt.verificarToken(req.headers["authorization"]).nombre);
    currUpload(req,res,function(err){
      if(err){
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
      }
      return callback(Respuesta.success({image: req.file}));
    });
  }

};

export default controllerUsers;
