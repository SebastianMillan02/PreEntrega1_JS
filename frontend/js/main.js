//Inicio de ciclo do-while para que se ejecute la cotización hasta que el usuario indique que quiere salir de la misma
let entradaUsuario;

do {
  //Se define el servicio que desea cotizar el cliente
  entradaUsuario = prompt(
    "Ingresa el servicio que deseas cotizar o 'salir' para finalizar tu cotización. Para conocer los servicios disponibles ingresa la palabra 'servicios'"
  );

  let cantidadInternas;

  //Switch para definir el servicio que ingresó el usuario
  switch (entradaUsuario.toLowerCase()) {
    case "sitio web":
      const precioInterna = 250000;

      cantidadInternas = parseInt(
        prompt("Ingresa la cantidad de páginas internas que va a tener tu web")
      );

      //Ciclo para definir que el usuario está ingresando un tipo y una cantidad de internas válida y repetir el prompt en caso de que no sea así.
      while (isNaN(cantidadInternas) || cantidadInternas <= 0) {
        alert(
          "Por favor ingresa un valor válido para la cantidad de páginas internas que va a tener tu sitio web"
        );
        cantidadInternas = parseInt(
          prompt(
            "Ingresa la cantidad de páginas internas que va a tener tu web"
          )
        );
      }

      //Cálculo del valor final estimado por la cantidad de internas especificada
      const precioWeb = cantidadInternas * precioInterna;
      alert(
        `El valor estimado de tu sitio web con ${cantidadInternas} páginas internas es de $${precioWeb.toLocaleString()} pesos colombianos`
      );

      break;

    case "mantenimiento":
      const mantenimientoMensual = 60000;
      const mantenimientoAnual = 600000;

      cantidadInternas = parseInt(
        prompt("Ingresa la cantidad de páginas internas que tiene tu web")
      );

      //Ciclo para definir que el usuario está ingresando un tipo y una cantidad de internas válida
      while (isNaN(cantidadInternas) || cantidadInternas <= 0) {
        alert(
          "Por favor ingresa un valor válido para la cantidad de páginas internas que tiene tu sitio web"
        );
        cantidadInternas = parseInt(
          prompt("Ingresa la cantidad de páginas internas que tiene tu web")
        );
      }

      //Definición del tipo de mantenimiento para entrar a un condicional con cambios de valor para cada uno de los mantenimientos
      let tipoMantenimiento = prompt(
        "Ingresa el tipo de mantenimiento que deseas para tu web: 'mensual' o 'anual'"
      );

      //Condicional para identificar el precio final del mantenimiento basado en la decisión de mantenimiento mensual o anual que elija el cliente
      if (tipoMantenimiento == "mensual") {
        alert(
          `El mes de mantenimiento de tu web tiene un costo de $${
            (mantenimientoMensual * cantidadInternas).toLocaleString()
          } pesos colombianos`
        );
      } else {
        alert(
          `El año de mantenimiento de tu web tiene un costo de $${
            (mantenimientoAnual * cantidadInternas).toLocaleString()
          } pesos colombianos`
        );
      }
      break;

    case "clases":
      let valorHora = 40000;

      let horasClase = parseInt(
        prompt("Ingresa la cantidad de horas de clase que necesitas ver")
      );

      //Ciclo para asegurar que el usuario está ingresando un tipo y una cantidad de horas válida
      while (isNaN(horasClase) || horasClase <= 0) {
        alert(
          "Por favor ingresa un valor válido para la cantidad de horas de clase que deseas cotizar"
        );

        horasClase = parseInt(
          prompt("Ingresa la cantidad de horas de clase que necesitas ver")
        );
      }

      //Cálculo del valor de las clases según la cantidad de horas especificadas por el usuario
      let valorClases = horasClase * valorHora;

      //Calcular descuento de clases si el cliente contrata 5 o más horas
      if (horasClase >= 5) {
        valorHora = 35000;

        alert(
          `Por contratar 5 o más horas, tienes un descuento de $5,000 en cada hora de clase. El valor total de tus clases sería de $${valorClases.toLocaleString()} pesos colombianos`
        );
      } else {
        alert(`El valor total de tus clases sería de $${valorClases.toLocaleString()} pesos colombianos`);
      }
      break;

    //Caso para que el usuario vea la lista de servicios disponibles
    case "servicios":
      alert(
        "En los servicios disponibles tenemos 'sitio web' - 'mantenimiento' - 'clases'"
      );
      break;

    //Finalización de la cotización
    case "salir":
      alert("Gracias por tu cotización.");
      break;

    //Alternativa para que el usuario sepa que no hay una opción con los términos que ingresó
    default:
      alert("Selecciona un servicio válido");
      break;
  }
} while (entradaUsuario.toLowerCase() !== "salir");
