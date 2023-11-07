/*Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.
La pocicion inicial es la posicion 0*/

const texto = prompt("Ingrese una cadena de texto:");
const textoEnMinusculas = texto.toLowerCase();
const vocales = "aeiou";
let posicion = -1; //esta en -1 para luego confirmar si no hay vocales 

for (let i = 0; i < textoEnMinusculas.length; i++) {
  const caracter = textoEnMinusculas[i];
  if (vocales.includes(caracter)) {
    posicion = i; 
    break;
  }
}

if (posicion !== -1) {
  document.write(`La primera vocal encontrada está en la posición ${posicion}`);
} else {
  document.write("No se encontraron vocales en el texto ingresado");
}
