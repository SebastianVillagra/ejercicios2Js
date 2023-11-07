/*ealizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

while (true) {
    const dni = prompt("Ingresa un número de DNI o pulsa 'cancelar' para salir:");
  
    if (dni === null) {
     
      break;
    }
  
    const numeroDNI = parseInt(dni);
  
    if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
      const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
      const resto = numeroDNI % 23;
      const letraDNI = letrasDNI.charAt(resto);
  
      alert(`El DNI ${numeroDNI} corresponde a la letra: ${letraDNI}`);
    } else {
      alert("No es un número de DNI válido");
    }
  }
  //No se porque cuando uso el parseint en la linea 12, no sale cuando pongo cancelar