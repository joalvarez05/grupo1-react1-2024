//? NUMBERS

//! analizamos el PROMPT
/* //? OPCIONES
a- ACEPTAR: sin completar = entrega STRING VACIO
b- CANCELAR: entrega NULL
c- COMPLETAR. siempre entrega STRING, por mas que ingresemos numero
 */
// let numeros = prompt("Ingrese un número: ");
// console.log(numeros);

// //parseInt - devuelve numero entero
// let numeroEntero = parseInt(numeros);
// console.log(numeroEntero);

// //parseFloat -devuelve numero con decimales
// let numeroDecimales = parseFloat(numeros);
// console.log(numeroDecimales);

//!NaN: Not a Number

//*EN UNA SOLA LINEA ---------------------------------------
/* //!ATENCION!
Cuando PARSEAMOS (convertimos a NUMBER) los datos del CAMPO, 
al presionar CANCELAR o ACEPTAR SIN COMPLETAR, 
ya NO recibimos NULL en nuestra variable, 
ahora recibimos NaN (Not a Number: no es un numero) */

// let edad = parseInt(prompt("Ingrese su edad: "));
// console.log(edad);

// let precio = parseFloat(prompt("Ingrese el precio del producto: "));
// console.log(precio);

//? METODO MATH
//* REDONADEAR ----------------------------------------------

// redondea para abajo .floor()
let numero1 = 45.7;
// console.log(Math.floor(numero1));
const numArriba = Math.floor(numero1);
console.log(numArriba);

// redondea para arriba .ceil()
let numero2 = 45.3;
console.log(Math.ceil(numero2));

// redondea para el num entero mas cercano (probar cambiando el valor) .round()
let numero3 = 45.4;
console.log(Math.round(numero3));
//* --------------------------------------------------------

//* MANEJO DE LOS DECIMALES---------------------------------
/* podemos usar:
- cualquiera de los metodos anteriores MAS la formula (num*100)/100
- o .toFixed() OJO! */

let numeroConDecimales = 45.3333333333;
console.log(numeroConDecimales);

// quitar decimales
console.log(Math.floor(numeroConDecimales));

// dejar decimales - 1, 2 o mas
console.log(Math.round(numeroConDecimales * 100) / 100);

// .toFixed
console.log(numeroConDecimales.toFixed(3));
//! OJO: convierte a STRING
//! QUE HACEMOS??
let numero4 = parseFloat(numeroConDecimales.toFixed(3));
console.log(numero4);

//* --------------------------------------------------------

//* MOSTRAR EL NUMERO MAYOR
console.log(`El numero mayor es: ${Math.max(54, 6, 87, 2, 945)}`);

//* MOSTRAR EL NUMERO MENOR

console.log(`El numero menor es: ${Math.min(54, 6, 87, 2, 945)}`);
//* --------------------------------------------------------

//* Elevar a la potencia
//potencia = base x exponente
//Math.pow

let base = 2;
let exponente = 4;
let resultado = Math.pow(base, exponente);
console.log(resultado);

//* Calcular la raiz cuadrada---------------------------------
//Math.sqrt

let numero = 22;
let raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada);
console.log(parseFloat(Math.sqrt(numero).toFixed(2)));
//* --------------------------------------------------------

//* Numeros randoms ------------------------------------------

console.log(Math.random()); //0 - 1

console.log(Math.random() * 10); //1 - 10

console.log(Math.random() * 100); //100
