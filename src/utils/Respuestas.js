//FICHERO PARA HOMOGENEIZAR LAS RESPUESTAS

const respuesta = {

  success: function(contenidoRespuesta) {
    return { resultado: contenidoRespuesta };
  },

  error: function(errorCode, mensaje) {
    return {
      error: { code: errorCode, mensaje: mensaje }
    };
  },

  enviarRespuesta: function(respuesta, res) {
    if (respuesta.error) {
      res.status(respuesta.error.code).send(respuesta);
    } else {
      res.send(respuesta);
    }
  }
};

export default respuesta;
