/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

const texto = prompt("Ingrese una cadena de texto:");
let textoAlReves = "";

for (let i = texto.length - 1; i >= 0; i--) { //el for reccore la cena de fin a principio
  textoAlReves += texto[i];
}

document.write("El texto al reves es : ", textoAlReves);
