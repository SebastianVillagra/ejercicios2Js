/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math()  */

let nombreMayor = "";
let edadMayor = -1; //Se inicializa en -1 para que sea menor que cualquier edad valida y asi luego comparar

for (let i = 1; i <= 3; i++) {
  const nombre = prompt(`Ingrese el nombre del sujeto ${i}:`);
  const edad = parseInt(prompt(`Ingrese la edad de ${nombre}:`));

  if (!isNaN(edad) && edad > edadMayor) {
    edadMayor = edad;
    nombreMayor = nombre;
  }
}

if (nombreMayor !== "") {
  alert(`La persona de mayor edad es ${nombreMayor}, que tiene ${edadMayor} años`);
} else {
  alert("Edades invalidas");
}
