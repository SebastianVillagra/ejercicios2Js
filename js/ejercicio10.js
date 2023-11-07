/*Realiza un script que pida número de ﬁlas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

const filas = parseInt(prompt("Ingrese el número de filas:"));
const columnas = parseInt(prompt("Ingrese el número de columnas:"));

document.write("<table border='1'>");
let numero = filas * columnas;

for (let i = 0; i < filas; i++) {
  document.write("<tr>");
  for (let j = 0; j < columnas; j++) {
    document.write("<td>" + numero + "</td>");
    numero--;
  }
  document.write("</tr>");
}

document.write("</table>");

//Esta medio feo pero cuando le quiero poner estilo con css se rompe 