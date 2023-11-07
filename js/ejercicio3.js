/*Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.*/

let cadenasConcatenadas = "";

while (true) {
  const cadena = prompt("Ingresa una cadena de texto o pulsa cancelar para salir: ");

  if (cadena === null) {
    break;
  }

  // Le agrego un espacio entre cadenas para hacerlo mas prolijo y voy agregando la cadena a una nueva variable 
  cadenasConcatenadas += cadena + "  ";
}

alert("Cadenas concatenadas: " + cadenasConcatenadas);