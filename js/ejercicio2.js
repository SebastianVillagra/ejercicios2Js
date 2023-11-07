/*Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la caliﬁcación en un alert según los siguientes rangos de nota:
0-2: Muy deﬁciente
3-4: Insuﬁciente
5-6: Suﬁciente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
“Introduce un número válido”.*/

const nota = parseFloat(prompt("Ingrese una nota del 0 al 10:"));

if (!isNaN(nota) && nota >= 0 && nota <= 10) {
  
  let calificacion = "";

  if (nota >= 0 && nota <= 2) {
    calificacion = "Muy deficiente";
  } else if (nota >= 3 && nota <= 4) {
    calificacion = "Insuficiente";
  } else if (nota >= 5 && nota <= 6) {
    calificacion = "Suficiente";
  } else if (nota === 7) {
    calificacion = "Bien";
  } else if (nota >= 8 && nota <= 9) {
    calificacion = "Notable";
  } else if (nota === 10) {
    calificacion = "Sobresaliente";
  }

  alert(calificacion);
  
} else if (isNaN(nota)) {
  alert("Introduce un número válido.");
} else {
  alert("Número erróneo");
}