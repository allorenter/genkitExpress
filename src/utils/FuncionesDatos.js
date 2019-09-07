const funcionesDatos = {
  generarConsulta: function(arrayPropiedades) {
    let consulta="";
    const propiedadesBbdd = [
      "calle",
      "codpostal",
      "poblacion",
      "provincia",
      "comunidad",
      "nombre",
      "primerapellido",
      "segundoapellido",
      "apellidos",
      "sexo"
    ];
    //variable para comprobar si la propiedad que recorremos en el bucle es la primera y así crear correctamente la consulta al concatenar las ,
    let i=0;
    arrayPropiedades.forEach(propiedad => {
        if (propiedadesBbdd.indexOf(propiedad.nombrePropiedad.toLowerCase())!=-1 && propiedad.seleccionada===true){
            if(i==0){
                consulta=propiedad.nombrePropiedad.toLowerCase();
            }else{
                consulta+=", "+propiedad.nombrePropiedad.toLowerCase();
            }
        }
        i++;
    });
    return consulta;
  }
};

export default funcionesDatos;