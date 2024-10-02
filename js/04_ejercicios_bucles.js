// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
// solucion
// let userAge = parseInt(prompt("Ingesa tu edad perra flaca: "));

// if (!isNaN(userAge)) {
//   if (userAge >= 18) {
//     console.log("Podes manejar capitan del titanic.");
//   } else if (userAge >= 16 && userAge < 18) {
//     console.warn(
//       "Debes pedirle autorización a tu tutor para solicitar el carnet de manejo."
//     );
//   } else {
//     console.error("No podes manejar ni una bici compadre.");
//   }
// } else {
//   console.warn("¡¡ Ingresa tu edad con números !!");
// }

/*EXPLICACION: 
1) PEDIMOS LA EDAD AL USUARIO.
2)CREAMOS UN BLOQUE CONDICIONAL EN EL CUAL PRIMERO EVALUAMOS SI ES UN NUMERO O SI ES NaN.
3) SI ES UN NUMERO, EVALUAMOS LA EDAD, EN LA QUE PUEDE CONDUCIR, DEBE IR CON UN TUTOR A SACAR EL REGISTRO, Y LA ULTIMA OPCION ES QUE NO PUEDE CONDUCIR SI ES MENOR DE 16 AÑOS.*/

/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/
// solucion
// let userCalification = parseInt(
//   prompt("Ingresa la nota del final de fisiopatologia del niño.")
// );

// if (isNaN(userCalification)) {
//   alert("Ingresa un valor númerico");
// } else {
//   if (userCalification >= 0 && userCalification <= 10) {
//     if (userCalification <= 2) {
//       alert("Muy deficiente");
//     } else if (userCalification <= 4) {
//       alert("Insuficiente");
//     } else if (userCalification <= 6) {
//       alert("Suficiente");
//     } else if (userCalification === 7) {
//       alert("Bien");
//     } else if (userCalification <= 9) {
//       alert("Notable");
//     } else if (userCalification === 10) {
//       alert("Sobresaliente");
//     }
//   } else alert("Ingresa un número entre 0 y 10.");
// }
/* EXPLICACION: 
1) SOLICITAMOS LA NOTA AL USUARIO.
2) REALIZAMOS UN BLOQUE CONDICIONAL, EN EL CUAL EVALUAMOS QUE LA NOTA INGRESADA SEA UN VALOR NUMERICO, Y LUEGO LE ASIGNAMOS UN RANGO A CADA NOTA PARA MOSTRAR UN MENSAJE DETERMINADO COMO POR EJEMPLO: SI LA NOTA ESTA ENTRE 5 Y 6, ES SUFICIENTE PARA APROBAR EL EXAMEN, Y ASI SUCESIVAMENTE. */

/*3 Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión - */
// solucion
// let evaluarAceptarCancelar = confirm("¿Deseas iniciar el programa?");
// let arrayDeTextos = [];
// while (evaluarAceptarCancelar === true) {
//   let cadenaDeTexto = prompt("Ingresa un texto: ");
//   if (cadenaDeTexto !== null) {
//     arrayDeTextos.push(cadenaDeTexto);
//   }
//   evaluarAceptarCancelar = confirm("¿Seguimos ingresando texto?");
// }
// let textoConcatenado = arrayDeTextos.join(" - ");
// alert(textoConcatenado);

/* EXPLICACION:
1)Primero que nada creamos un confirm() que permite decidir si comenzamos con el programa o no.
2) Creamos un array vacio, donde se ira pusheando el texto ingresado por el user.
3) Creamos un bucle while (true) , lo que hace es evaluar la condicion de la variable evaluarAceptarCancelar, mientras que esta variable devuelva true, se ejecuta el bucle.
4) Dentro el bucle tenemos definida una variable con un prompt para que el usuario ingrese texto.
5) Luego evaluamos, si la variable cadenaDeTexto(el prompt) que se ingreso recien contiene texto, lo pusheamos dentro del array vacio que habiamos creado al principio.
6) Volvemos a ejecutar el confirm(), cosa que si vuelve aceptar el usuario, devolvera true y volvera a ejecutar el bucle. De lo contrario si apreta cancelar, el resultado que devuelve sera false, por lo que el bucle se dejara de ejecutar.
7) Luego de finalizado el bucle, separamos con un guion medio (-) todas las cadenas que forman el array, y lo devolvera en dato de tipo string, ya no sera mas array.
8) Con un alert mostramos la cadena concatenada.
*/

/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */
// solucion
// let evaluarBooleanos = confirm("¿Deseas iniciar el programa?");
// let arrayDeNumeros = [];
// let sumaFinal = 0;

// while (evaluarBooleanos === true) {
//   let numeros = parseInt(prompt("Ingresa un número: "));
//   if (isNaN(numeros)) {
//     alert("Debes ingresar números");
//     // numeros;
//   } else {
//     arrayDeNumeros.push(numeros);
//     evaluarBooleanos = confirm("¿Seguimos ingresando números?");
//   }
// }
// for (let i = 0; i < arrayDeNumeros.length; i++) {
//   sumaFinal += arrayDeNumeros[i];
// }
// console.log(sumaFinal);
// console.log(typeof arrayDeNumeros);

