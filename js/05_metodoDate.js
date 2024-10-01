// let dia = new Date().getDay();
// console.log(dia);
// switch (dia) {
//   case 0:
//     console.log("Hoy es Domingo");
//     break;
//   case 1:
//     console.log("Hoy es Lunes");
//     break;
//   case 2:
//     console.log("Hoy es Martes");
//     break;
//   case 3:
//     console.log("Hoy es Miercoles");
//     break;
//   case 4:
//     console.log("Hoy es Jueves");
//     break;
//   case 5:
//     console.log("Hoy es Viernes");
//     break;
//   case 6:
//     console.log("Hoy es Sabado");
//     break;
// }

/*Crear un script tipo trivia, donde se le pregunte al usuario
la capital de un pais, tendra 3 intentos.
si falla pierde! */

const respuestaCorrecta = "buenos aires";
let contador = 3;

while (contador > 0) {
  let respuesta = prompt("Cual es la capital de Argentina ? ");
  if (respuesta == null) {
    alert("Has cancelado el juego.");
    break;
  }
  respuesta = respuesta.toLowerCase().trim();
  if (respuesta === respuestaCorrecta) {
    alert("ACERTASTE PERRITO");
    break;
  } else {
    contador--;
    alert(`Te quedan ${contador} intentos`);
  }
}

