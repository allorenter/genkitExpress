//GENERAMOS LAS RESPUESTAS PARA USUARIOS

import { tablaUsuarios } from "../utils/BBDD";
import Usuario from "../utils/Usuario";
import Respuesta from "../utils/Respuestas";
import jwt from "../utils/JWT";

const controllerUsers = {
  login: function(nombre, contrasena, callback) {
    let usuario = new Usuario(nombre, null, contrasena);
    tablaUsuarios
      .login(usuario)
      .then(result => {
        if (result.length > 0) {
          return callback(
            Respuesta.success({
              mensaje: "Login correcto",
              usuario: usuario.nombre,
              token: jwt.generarToken(usuario)
            })
          );
        } else {
          return callback(
            Respuesta.error(401, "Usuario o contraseña incorrectos")
          );
        }
      })
      .catch(e => {
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
      });
  },

  crearUsuario: function(nombre, email, contrasena, callback) {
    let nuevoUsuario = new Usuario(nombre, email, contrasena);
    tablaUsuarios
      .crearUsuario(nuevoUsuario)
      .then(usuarioCreado => {
        return callback(
          Respuesta.success({
            mensaje: "Usuario creado correctamente",
            usuario: nuevoUsuario.nombre
          })
        );
      })
      .catch(e => {
        if (e.errno == 1062) {
          return callback(
            Respuesta.error(400, "El nombre de usuario ya existe")
          );
        } else {
          return callback(Respuesta.error(404, "Ha ocurrido un error"));
        }
      });
  },

  usuarioExiste: function(nombre, callback) {
    let usuario = new Usuario(nombre, null, null);
    tablaUsuarios
      .usuarioExiste(usuario)
      .then(usuarioExiste => {
        if (usuarioExiste.length > 0) {
          return callback(
            Respuesta.success({ existe: true, mensaje: "El usuario existe" })
          );
        } else {
          return callback(
            Respuesta.success({
              existe: false,
              mensaje: "El usuario NO existe"
            })
          );
        }
      })
      .catch(e => {
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
      });
  },

  comprobarToken: function(token, callback) {
    if (jwt.verificarToken(token)) {
      return callback(Respuesta.success("Token válido"));
    } else {
      return callback(Respuesta.error(401, "Token inválido"));
    }
  },

  getConfigHome: function(token, callback) {
    tablaUsuarios
      .getConfigHome(jwt.verificarToken(token).nombre)
      .then((result)=>{
        if(result.length>0){
          return callback(Respuesta.success({configHome: JSON.parse(result[0].config)}));
        }else{
          return callback(Respuesta.error(401, "Token inválido"));
        }
      })
      .catch((e)=>{
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
      });
      
  }
};

export default controllerUsers;
