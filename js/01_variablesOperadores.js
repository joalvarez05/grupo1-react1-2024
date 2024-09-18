//? COMENTARIOS

//Comentario de una sola linea

/*Comentorio de varias lineas, 
este es un 
comentario de
varias lineas*/

//Comentario verde
//*Comentario verde claro
//?Comentario azul
//!Comentario rojo

//*---------------------------------------------------------
//? COMO EJECUTAR JVS

//a- Directo en HTML
//b- Consola
//c- Creando archivo JVS

//*---------------------------------------------------------
//? IMPRIMIR EN CONSOLA

console.log("Hola");
console.error("Soy un error");
console.warn("Soy una advertencia");

//? IMPRIMIR EN PANTALLA O DOCUMENTO
document.write("Hola");

//*---------------------------------------------------------
//? SINTAXIS EN JVS
/*
. TIPOS DE VARIABLE:

- VAR
- LET
- CONST

. NOMBRE: Para el nombre de las variables se usa "camelCase"

. VALOR: se le asigna un valor a la variable con =
*/

//*-----------------------------
//? Let

let nombreApellido = "Lucas Ferruchi";
console.log(nombreApellido);

//! NO PUEDEN REPETIRSE
// let nombreApellido =

//! SI PUEDEN REASIGNARSE
nombreApellido = "Juan Carlos";
console.log(nombreApellido);

//*-----------------------------
//? Const

const apellido = "Ferruchi";
console.log(apellido);

//! NO PUEDEN NI REPETIRSE NI REASIGNARSE
// const apellido = !ERROR
// apellido = "gonzales";
// console.log(apellido);

//*-----------------------------
//? Var

var alumno = "Luci";

//! ojo: PUEDEN REPETIRSE Y REASIGNARSE
var alumno = "Carlos";
console.log(alumno);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//? OPERADORES

//? Asignacion "="

//? Aritméticos
let numero1 = 987;
let numero2 = 34;

console.log(numero1 + numero2); //hacerlo directo en consola tambien

let resultado = numero1 % numero2;
console.log(resultado);

//*------------------------
//! OJO con el + en string

let nombre = "Lucas";
let apellido1 = "Ferruchi";
let edad = 38;

console.log(nombre + " " + apellido1 + " " + edad);

//PEQUEÑO EJERCICIO
/*En consola, aparezca el siguiente mensaje:
Nombre: Lucas Apellio: Ferruchi Edad: 38*/

console.log("Nombre: " + nombre + " Apellido: " + apellido1 + " Edad: " + edad);

//*---------------------------------------------------------
//? OPERADORES DE RELACION O COMPARACION

let numero3 = 34;
let numero4 = "34";
console.log(numero4);

console.log(numero3 == numero4); //diferenciar entre =, == y ===

//*---------------------------------------------------------
//? OPERADORES UNITARIOS
// ++ y --. Si los aplico a una cadena de string devuelve NUMBER

++numero1;
console.log(numero1);

--numero4;
console.log(numero4);

//*---------------------------------------------------------
//? OPERADORES LOGICOS
//&& Y ||

//* ejemplo
console.log(2 > 3 || 3 > 4);

//*---------------------------------------------------------
//? OPERADOR DE NEGACION
// "!". Invierte el valor

let caja = true;
console.log(!caja);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//? ARRAYS O ARREGLOS - APLICAR EL LOG

let cajaNumeros = [12, 65, -65, 67.34];
console.log(cajaNumeros);

let ficha = ["Carlos", "Camila", "Luci", "Juan"];
console.log(ficha);

let ficha1 = ["Lucas", "Jorge", "sofia", 540, true];
console.log(ficha1);

//*---------------------------------------------------------
//? OBJETOS - APLICAR EL LOG

let persona = {
  nombre: "Lucas",
  apellido: "Ferruchi",
  edad: 38,
  cursando: true,
  domicilio: ["Corrientes ", 78, " San Miguel"],
};

console.log(persona);
