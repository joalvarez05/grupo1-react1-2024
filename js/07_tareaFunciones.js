// ! Tarea 1 - con declarativa o anonima
/*
HACER UNA FUNCION QUE CALCULE UN DESCUENTO SOBRE UN PRECIO
precio
descuento
(precio * descuento) /100
*/
// Solucion

// let precioArticulo = 1000;
// let descuento = 10;

// function calcularDescuento(precioArticulo, descuento) {
//   if (isNaN(precioArticulo) || isNaN(descuento)) {
//     console.warn("Debes ingresar un número valido!");
//   } else {
//     let totalApagar = precioArticulo - (precioArticulo * descuento) / 100;
//     return console.log(
//       `El precio del articulo es ${precioArticulo} y el descuento a aplicar es ${descuento} %, porr lo tanto el precio final con el descuento aplicado sera de ${totalApagar}`
//     );
//   }
// }

// calcularDescuento(precioArticulo, descuento);

//! Tarea 2 - con arrow
/*
CALCULADORA, sólo para SUMA, RESTA, MULTIPLICACION Y DIVISION. 
NUMEROS

2 valores minimo
totalApagar (+ - * /)
SWITCH
*/

// const calculadora = (operacion, numeroA, numeroB) => {
//   if (isNaN(numeroA) || isNaN(numeroB)) {
//     console.warn("Ingresa un número valido!");
//   } else {
//     switch (operacion) {
//       case "suma":
//       case "+":
//         console.log(numeroA + numeroB);
//         break;
//       case "resta":
//       case "-":
//         console.log(numeroA - numeroB);
//         break;
//       case "multiplicacion":
//       case "*":
//         console.log(numeroA * numeroB);
//         break;
//       case "division":
//       case "/":
//         console.log(numeroA / numeroB);
//         break;
//     }
//   }
// };
// calculadora("division", 10, 2);

const titulo = document.getElementById("h1");
const boton = document.getElementById("button");
const span = document.getElementById("hMundo");

span.addEventListener("dblclick", () => {
  let respuesta = confirm("Dices OK o cancelar ?");
  if (respuesta) {
    alert("Has clickeado en ACEPTAR");
  } else {
    alert("Has clickeado en CANCELAR");
  }
});
