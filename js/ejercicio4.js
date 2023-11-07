/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.*/

let sumaTotal = 0;

while (true) {
  const numeroIngresado = prompt("Ingresa un número o pulsa 'cancelar' para salir:");

  if ( numeroIngresado === null) {
    break;
  }

  const numero = parseInt(numeroIngresado);

  if (!isNaN(numero)) {
    
    sumaTotal += numero;

  } else {
    
    alert("No es un número válido, ingresa otro numero");
  }
}

alert("La suma total de los números introducidos es: " + sumaTotal);

//No se porque cuando uso el parseint en la linea 8, no sale cuando pongo cancelar