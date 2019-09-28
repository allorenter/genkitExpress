//GENERAMOS LAS RESPUESTAS PARA USUARIOS

import { tablaUsuarios } from "../utils/BBDD";
import Usuario from "../models/Usuario";
import Respuesta from "../utils/Respuestas";

const controllerUsers = {
  
  login: function(nombre, contrasena, callback) {
    let usuario= new Usuario(nombre, null, contrasena);
    tablaUsuarios.login(usuario).then(result => {
      if(result.length>0){
        return callback(Respuesta.success({mensaje : "Login correcto", usuario: usuario.nombre}));
      }else{
        return callback(Respuesta.error(401, "Usuario o contraseña incorrectos"));
      }
    }).catch(e => {
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
    });
  },

  crearUsuario: function(nombre, email, contrasena, callback){
    let nuevoUsuario= new Usuario(nombre, email, contrasena);
    tablaUsuarios.crearUsuario(nuevoUsuario).then((usuarioCreado)=>{
      return callback(Respuesta.success({mensaje : "Usuario creado correctamente", usuario: nuevoUsuario.nombre}));
    }).catch((e)=>{
      if (e.errno==1062){
        return callback(Respuesta.error(400, "El nombre de usuario ya existe"));
      }else{
        return callback(Respuesta.error(404, "Ha ocurrido un error"));
      }
    })  
  }
};

export default controllerUsers;
