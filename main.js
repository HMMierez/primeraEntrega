function convertirDistancia() {
      var opcion = prompt("Ingrese la opción deseada:\n1. Convertir de metros a kilómetros\n2. Convertir de metros a centímetros\n3. Convertir de metros a milímetros");

      // Validamos que se haya ingresado un número válido
      while (isNaN(opcion) || opcion !== "1" && opcion !== "2" && opcion !== "3") {
          opcion = prompt("Opción no válida. Ingrese 1, 2 o 3:\n1. Convertir de metros a kilómetros\n2. Convertir de metros a centímetros\n3. Convertir de metros a milímetros");
      }

      var distancia = parseFloat(prompt("Ingrese la distancia en metros:"));

      // Validamos que se haya ingresado una distancia válida
      while (isNaN(distancia)) {
          distancia = parseFloat(prompt("Distancia no válida. Ingrese la distancia en metros:"));
      }

      var resultado;
      if (opcion === "1") {
          resultado = distancia / 1000; // 1 kilómetro equivale a 1000 metros
          alert(distancia + " metros son aproximadamente " + resultado.toFixed(2) + " kilómetros.");
      } else if (opcion === "2") {
          resultado = distancia * 100; // 1 metro equivale a 100 centímetros
          alert(distancia + " metros son aproximadamente " + resultado.toFixed(2) + " centímetros.");
      } else if (opcion === "3") {
          resultado = distancia * 1000; // 1 metro equivale a 1000 milímetros
          alert(distancia + " metros son aproximadamente " + resultado.toFixed(2) + " milímetros.");
      }
  }

  convertirDistancia();