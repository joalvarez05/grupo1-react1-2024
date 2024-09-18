//? prompt

// let nombreApellido = prompt("Ingrese nombre y apellido:");
// console.log(nombreApellido);

//---------------------------------------------------------
//? STRING - METODOS
//* CONCATENACION

let nombre = "Lucas";
let apellido = "Garcia";

//* con "+"
console.log("Mi nombre es" + " " + nombre + " " + apellido);
console.log(nombre, apellido);

//* Template String
console.log(`Mi nombre es ${nombre} ${apellido}`);

//! Ejemplo con numero

let numA = 656;
let numB = 32;

console.log(`La suma de ${numA} con ${numB} es igual a ${numA + numB}`);

//* -------------------------------------------------------------------
//? STRING - METODOS (FUNCIONES)

let texto = " Lucas Ferruchi ";

//Cantidad de caracteres
console.log(texto.length);

//Mayusculas
console.log(texto.toUpperCase());

//Minusculas
console.log(texto.toLowerCase());

//Eliminar espacios al principio y al final de la cadena string
console.log(texto.trim());

//Obtener un solo caracter de la cadena
console.log(texto.charAt(7));

//Ultima posicion
console.log(texto.charAt(texto.length - 3));
console.log(texto.at(7));

//devuelve la POSICION del primer caracter que encuentra
console.log(texto.indexOf("Lucas"));

//encontrar un caracter especifico o una cadena
console.log(texto.includes("Lucas"));

//Obtener una parte de la cadena
console.log(texto.substring(3));

console.log(texto.substring(0, 8));

//Reemplazar una parte de la cadena
console.log(texto.replace("Lucas", "Carlos"));

//Dividir cadena de caracteres
console.log(texto.split(" "));

//Concatenar con otra cadena
console.log(texto.concat(" Hola!"));
