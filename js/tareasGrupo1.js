//EJERCICIOS

/*Con solo dos valores numericos realizar:
Mostramos por consola los siguientes resultados
-suma
-resta
-multiplicacion
-dividision
-comparamos y decimos si la primera variable es mayor a la segunda

- mostrar los resultados:
!!!! El resultado de la operacion es:
Ejemplo: El resultado de la operacion es:  58
!!!! Y TAMBIEN Mostrar toda la operación
Ejemplo: 45+13: 58 o 45 es mayor que 13: true*/

//? SOLUCION ----------------------------------------------------------------

// let num1 = 45;
// let num2 = 13;

// console.log("El resultado de la operacion es: ", num1 + num2);
// console.log("El resultado de la operacion es: ", num1 - num2);
// console.log("El resultado de la operacion es: ", num1 * num2);
// console.log("El resultado de la operacion es: ", num1 / num2);
// console.log("El resultado de la operacion es: ", num1 > num2);

// console.log(num1 + "+" + num2 + ":", num1 + num2);
// console.log(num1 + "-" + num2 + ":", num1 - num2);
// console.log(num1 + "*" + num2 + ":", num1 * num2);
// console.log(num1 + "/" + num2 + ":", num1 / num2);
// console.log(num1 + " es mayor que " + num2 + ":", num1 > num2);

//* -------------------------------------------------------------------------
/*
 1.
 A-PEDIR AL USUARIO QUE INGRESE SU APELLIDO - GUARDARLO EN MAYUSCULAS Y 
 SIN ESPACIOS NI AL PRINCIPIO NI AL FINAL 
 B-CALACULAR SU CANTIDAD DE CARACTERES, DEBE APARECER "APELLIDO" TIENE "x" CARACTERES
 C-OBTENER EL ULTIMO CARACTER DEL APELLIDO*/

//? SOLUCION ----------------------------------------------------------------

// //A
// let apellido = prompt("Ingresa tu apellido").trim().toUpperCase();
// console.log(apellido);
// //B
// console.log(`${apellido} tiene ${apellido.length} caracteres`);
// //C
// console.log(`El ultimo caracter de ${apellido} es ${apellido.at(-1)}`);

//* -------------------------------------------------------------------------
/*
 2.
 EN LA SIGUIENTE PALABRA "mascota"
A-PASARLA A MAYUSCULA
B-PASARLA A MINUSCULA
C-CAPITALIZAS LA PALABRA "Mascota"
 */

//? SOLUCION ----------------------------------------------------------------

// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// Dificultad:  🟢
// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// Dificultad:  🟢
// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// Dificultad:  🟢
// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// Ejemplo:

// input: Coder
// Output: Hola Coder

// Dificultad:  🟢
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt

//---------------------------------------------------------------------------------------------------//
//alert("un mensaje")
// //------------------------------------------------------------------------------------------------//
// document.write("hello word")
// //------------------------------------------------------------------------------------------------//
// document.write (3 + 5)
// //------------------------------------------------------------------------------------------------//
// let nombre= prompt("ingrese nombre usuario")
// document.write("hola " + nombre)
// //------------------------------------------------------------------------------------------------//
// let numero1 =parseInt(prompt("ingrese el primer numero"));
// let numero2 =parseInt(prompt("ingrese el segundo numero"));
// document.write(La suma de ${numero1} con ${numero2} es igual a ${numero1 + numero2})
// //------------------------------------------------------------------------------------------------//
// let numero1 = parseInt(prompt("ingrese el primer numero"));
// let numero2 = parseInt(prompt("ingrese el segundo numero"));
// let numeromayor = Math.max(numero1, numero2);
// document.write("El " + numeromayor + " es el numero mas grande");
// //------------------------------------------------------------------------------------------------//
// let numero1 = parseInt(prompt("ingrese el primer numero"));
// let numero2 = parseInt(prompt("ingrese el segundo numero"));
// let numero3 = parseInt(prompt("ingrese el tercer numero"));
// let numeromayor = Math.max(numero1, numero2, numero3);
// document.write("El " + numeromayor + " es el numero mas grande");
// //------------------------------------------------------------------------------------------------//

// let palabra = "mascota";

// console.log(palabra.toUpperCase());

// console.log(palabra.toLowerCase());

// /*Obtener la primera letra */
// let primeraLetra = palabra.at(0).toUpperCase();
// console.log(primeraLetra);
// /*Obtener el resto de la palaba */
// let restoPalabra = palabra.substring(1);
// console.log(restoPalabra);
// console.log(primeraLetra + restoPalabra);

// let palabra = "mascota";

// let palabraCapitalizada = palabra.at(0).toUpperCase() + palabra.substring(1);
// console.log(palabraCapitalizada);

//Tareas del dia!

/*Tarea 1:
-Obtener un numero aleatorio entre 1 y 100
-Calcular la raíz cuadrada y mostrar en consola
-Elevarlo a la quinta potencia y mostrarlo en consola

tarea 2:
-Crea una lista de numeros cualquiera y mostrar por consola
-El mayor y el menor

tarea 3:
-Dados los siguientes numeros,
46.66987
98.66547
78.65997
-dejarlos con dos decimales y mostrarlos en consola*/

// ---------------------------------------------------------------------------------------------------
//? SOLUCIONES
// tarea 1
// let numeroAleatorio= Math.round(Math.random() * 100);
// console.log(numeroAleatorio);
// let raizCuadradaNumAleatorio= Math.sqrt(numeroAleatorio);
// console.log(raizCuadradaNumAleatorio);
// let exponente= 5;
// let quintaPotenciaNumAleatorio= Math.pow(numeroAleatorio, exponente);
// console.log(quintaPotenciaNumAleatorio);
//                                                                           //
//tarea 2
// let numerosCualquiera = [2, 5, 6, 7, 99, 34];

// for (let i=0; i<numerosCualquiera.length; i++) {
//     console.log(numerosCualquiera[i])
// };

// console.log(Math.max(...numerosCualquiera), Math.min(...numerosCualquiera));
//                                                                           //
//tarea 3

// let numeroConDecimales1 = 46.66987;
// let numeroConDecimales2 = 98.66547;
// let numeroConDecimales3 = 78.65997;
// let numero1 = parseFloat(numeroConDecimales1.toFixed(2));
// let numero2 = parseFloat(numeroConDecimales2.toFixed(2));
// let numero3 = parseFloat(numeroConDecimales3.toFixed(2));

// console.log(numero1, numero2, numero3);

//------------------------------------------------------------------------------------------
//* Ejercicio fiesta
//Solo puede entrar personas de 18 años o mas
//Sino debe entrar con un adulto responsable "tutor"

//------------------------------------------------------------------------------------------
//? SWITCH
//Ejercicio verduleria
/*Pedir al usuario que ingrese un producto de verduleria.
- en caso que este disponible ese producto: informar el valor del kilo
- en caso de que el producto NO este disponible: informar al usuario que esta en falta */

let edad = parseInt(prompt("Ingresa tu edad"));

if (!isNaN(edad)) {
  if (edad >= 18) {
    console.log("Puede ingresar");
  } else {
    console.log("Debe ingresar con un tutor");
  }
} else {
  console.warn("Debe ingresar un NUMERO");
}

let producto = prompt("Ingrese un producto de verdulería").toUpperCase().trim();

switch (producto) {
  case "BANANA":
    console.log("El valor del kg de banana es $2500");
    break;
  case "MANZANA":
    console.log("El valor del kg de manzana es $3500");
    break;
  case "TOMATE":
    console.log("El valor del kg de tomate es $4000");
    break;

  default:
    console.log("No nos quedó de eso");
    break;
}
