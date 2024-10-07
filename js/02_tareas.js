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

let num1 = 45;
let num2 = 13;

console.log("El resultado de la operacion es: ", num1 + num2);
console.log("El resultado de la operacion es: ", num1 - num2);
console.log("El resultado de la operacion es: ", num1 * num2);
console.log("El resultado de la operacion es: ", num1 / num2);
console.log("El resultado de la operacion es: ", num1 > num2);

console.log(num1 + "+" + num2 + ":", num1 + num2);
console.log(num1 + "-" + num2 + ":", num1 - num2);
console.log(num1 + "*" + num2 + ":", num1 * num2);
console.log(num1 + "/" + num2 + ":", num1 / num2);
console.log(num1 + " es mayor que " + num2 + ":", num1 > num2);

//* -------------------------------------------------------------------------
/*
 1.
 A-PEDIR AL USUARIO QUE INGRESE SU APELLIDO - GUARDARLO EN MAYUSCULAS Y 
 SIN ESPACIOS NI AL PRINCIPIO NI AL FINAL 
 B-CALACULAR SU CANTIDAD DE CARACTERES, DEBE APARECER "APELLIDO" TIENE "x" CARACTERES
 C-OBTENER EL ULTIMO CARACTER DEL APELLIDO*/

//? SOLUCION ----------------------------------------------------------------

//A
let apellido = prompt("Ingresa tu apellido").trim().toUpperCase();
console.log(apellido);
//B
console.log(`${apellido} tiene ${apellido.length} caracteres`);
//C
console.log(`El ultimo caracter de ${apellido} es ${apellido.at(-1)}`);

//* -------------------------------------------------------------------------
/*
 2.
 EN LA SIGUIENTE PALABRA "mascota"
A-PASARLA A MAYUSCULA
B-PASARLA A MINUSCULA
C-CAPITALIZAS LA PALABRA "Mascota"
 */

//? SOLUCION ----------------------------------------------------------------

let palabra = "mascota";
//A
console.log(palabra.toUpperCase());
//B
console.log(palabra.toLowerCase());
//C
/*Obtener la primera letra */
let primeraLetra = palabra.at(0).toUpperCase();
console.log(primeraLetra);
/*Obtener el resto de la palaba */
let restoPalabra = palabra.substring(1);
console.log(restoPalabra);
console.log(primeraLetra + restoPalabra);

/*Puedo hacer todo esto en una sola linea */
// let palabra = "mascota";

let palabraCapitalizada = palabra.at(0).toUpperCase() + palabra.substring(1);
console.log(palabraCapitalizada);
// probando git
