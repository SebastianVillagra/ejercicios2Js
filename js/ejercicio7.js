/*Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

const tope = parseInt(prompt("Ingresa el número tope no mayor de 50:"));

if (!isNaN(tope) && tope > 0 && tope <= 50) {
  for (let i = tope; i >= 1; i--) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    document.write(linea + "<br>");
  }
} else {
  alert("Ingresa un número válido entre 1 y 50.");
}
