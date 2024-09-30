/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/
// solucion
// alert("Este es un mensaje de alerta")

/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).*/
// solucion
// document.write("Hello World")

/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.*/
// solucion
// console.log(`El resultado de sumar 3 + 5 es: ${3 + 5}`)

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»*/
// solucion
// let nombreUsuario = prompt("Ingresa tu nombre completo").toLowerCase().trim();
// console.log(`Bienvenido ${nombreUsuario} al curso mas picante del año.`);

/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.*/
// solucion
// let primerNumero = parseInt(prompt("Ingresa el primer número aleatorio"));
// let segundoNumero = parseInt(prompt("Ingresa el segundo número aleatorio"));
// console.log(
//   `El resultado entre sumar ${primerNumero} y ${segundoNumero} es ${
//     primerNumero + segundoNumero
//   }`
// );

/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
// solucion
// let numeroUno = +prompt("Ingresa un número aleatorio");
// let numeroDos = +prompt("Ingresa un segundo número aleatorio");

// if (numeroUno > numeroDos){
//     console.log(`El número mas grande es ${numeroUno}`)
// } else {
//     console.log (`El número mas grande es ${numeroDos}`)
// }

/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
// solucion
// let numeroUno = Number(prompt("ingresa un numero aleatorio"));
// let numeroDos = Number(prompt("ingresa un numero aleatorio"));
// let numeroTres = Number(prompt("ingresa un numero aleatorio"));

// if (numeroUno > numeroDos && numeroUno > numeroTres) {
//   console.log(`El mas grande es el ${numeroUno}`);
// } else if (numeroDos > numeroUno && numeroDos > numeroTres) {
//   console.log(`El más grande es el ${numeroDos}`);
// } else {
//   console.log(`El número más grande es el ${numeroTres}`);
// }

/*8.- Escribe un programa que pida un número y diga si es divisible por 2*/
// solucion
// let numeroUno = parseInt(
//   prompt("ingresa un numero para ver si es para o impar")
// );

// if (numeroUno % 2 === 0) {
//   console.log("El número es par.");
// } else {
//   console.log("El número es impar.");
// }

/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
 */
// solucioon
// let fraseDelUsuario = prompt("Ingresa la frase de una canción")
//   .toLowerCase()
//   .trim();
// let vocales = "";

// for (let i = 0; i < fraseDelUsuario.length; i++) {
//   let caracter = fraseDelUsuario.charAt(i);
//   if (caracter === "a" || caracter === "e" || caracter === "i"|| caracter === "o" || caracter === "u") {
//     vocales += caracter;
//   }
// }
// console.log(`las vocales que aparecen son: ${vocales}`)

/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/
// solucion {--REHACER--}
// let numeroUsuario = +prompt("Ingresa un número tigre");

// if (numeroUsuario % 2 === 0) {
//   console.log(`El ${numeroUsuario} es divisible por 2`);
// } else if (numeroUsuario % 3 === 0 && numeroUsuario === 7) {
//   console.log(`El ${numeroUsuario} es divisible por 3`);
// } else if (numeroUsuario % 5 === 0 && numeroUsuario === 3) {
//   console.log(`El ${numeroUsuario} es divisible por 5`);
// } else if (numeroUsuario % 7 === 0 && numeroUsuario === 5) {
//   console.log(`El ${numeroUsuario} es divisible por 7`);
// } else {
//   console.log(`El ${numeroUsuario} no es divisible por 2,3,5 ni 7.`);
// }

/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/
// Falta la solucion


