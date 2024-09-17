//COMENTARIOS EN JVS

// Comentario de UNA sola linea
/* Comentarios de VARIAS lineas:
este es un comentario
de varias lineas!*/

//Comentario verde
//*Comenatrio verde claro
//?Comentario azul
//!Comentario rojo

//*---------------------------------------------------------
//? COMO EJECUTAR JVS

//a- Directo HTML
//b- Consola
//c- Creando el archivo JVS

//*---------------------------------------------------------
//? CONSOLA

console.log("Hola!");
console.error("Soy un error");
console.warn("Soy una advertencia!");

//*---------------------------------------------------------
//? IMPRIMIR EN PANTALLA O DOCUMENTO
document.write("Hola");

//*---------------------------------------------------------
//? SINTAXIS EN JVS

//!VARIEBLES

/*
-TIPOS DE VARIABLES

- VAR
- LET
- CONST

. NOMBRE: camelCase
*/

//*---------------------------------------------------------
//? LET

let nombreApellido = "Lucas Ferruchi";
console.log(nombreApellido);

//! NO SE PUEDE REPETIR
// let nombreApellido = "juan perez";
// console.log(nombreApellido);

//! SE PPUEDEN REASIGNAR
nombreApellido = "juan perez";
console.log(nombreApellido);

//*---------------------------------------------------------
//? CONST

const apellido = "Ferruchi";

//! NO SE PUEDE REPETIR
// const apellido

//! NO SE PUEDEN REASIGNAR
// apellido = "Perez";

//*---------------------------------------------------------
//? VAR

var alumno = "Luci";
console.log(alumno);

var alumno = "Carlos";
console.log(alumno);

alumno = "Jessi";
console.log(alumno);

//*---------------------------------------------------------
let numero = 45;
console.log(numero);

//----------------------------------------------------------
//----------------------------------------------------------//? VAR
//? OPERADORES

//? ASIGNACION "="

//? ARITMETICOS "+ - * / %"
let numero1 = 65789;
let numero2 = 34;

console.log(numero1 % numero2);

let resultadoSuma = numero1 + numero2;
console.log(resultadoSuma);

let resultadoResta = numero1 - numero2;
console.log(resultadoResta);

//! ojo!!! con el + (concatenar cadenas de STRING)

let nombre = "Lucas";
let apellido1 = "Ferruchi";
let edad = 39;

console.log(nombre + " " + apellido1 + " " + edad);

//? COMPARACION "=" "==" "==="
let numero3 = 34;
let numero4 = "34";

console.log(numero3 === numero4);

//? UNITARIOS ++ --

++numero3;
console.log(numero3);

--numero3;
console.log(numero3);

//? NEGACION "!"
let caja = true;
console.log(!caja);

//? LOGICOS "&&" (Y - AND) "||"(O - OR)
//* EJEMPLO
console.log(2 < 3 || 3 > 4);
