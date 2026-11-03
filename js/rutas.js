export function dir(ruta) {
   if (ruta){
      window.location.href = ruta; //Esto es cuando le pasamos una ruta como parametro, para ir a la pantalla que le pasamos
      return;
   }

   let pantallaactual = window.location.href; // Obtiene la URL actual
   let posicion = pantallaactual.indexOf("Pantalla"); // Busca la posición de la palabra "Pantalla" en la URL
   if (posicion !== -1) {
      let numero1 = pantallaactual[posicion + 8]; // Obtiene el carácter que sigue a "Pantalla" en la URL
      let numero2 = pantallaactual[posicion + 9];// Obtiene el siguiente carácter después de numero1( si fuera un número de dos dígitos)

      let aux = numero1;
      if (numero2 >= '0' && numero2 <= '9') { // Verifica si numero2 es un dígito
         aux += numero2; // Si es un dígito, concatena numero1 y numero2
      }

      let numeroactual = parseInt(aux); // Convierte la cadena resultante en un número entero
      let numeroSiguiente = numeroactual + 1; // Incrementa el número actual en 1
      let nuevaURL = pantallaactual.replace("Pantalla" + aux, "Pantalla" + numeroSiguiente); // Reemplaza la parte de la URL con el nuevo número

      window.location.href = nuevaURL; // Redirige a la nueva URL
   } else {
      console.error("La palabra 'Pantalla' no se encontró en la URL actual.");
   }
}

