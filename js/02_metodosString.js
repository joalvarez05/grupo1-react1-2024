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

// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.
// solucion
// let nombre = prompt("Ingresa tu nombre mostro: ").toUpperCase().trim();
// console.log(nombre);

// 14- Realiza un script que ++pida una cadena de texto++ y ++lo muestre++ poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
// solucion

// let requestAstring = prompt("Ingresa un texto").trim().toLowerCase();
// requestAstring = requestAstring.replace(/\s+/g, "");
// let stringWithHyphen = "";
// for (let i = 0; i < requestAstring.length; i++) {
//   stringWithHyphen += requestAstring[i];
//   stringWithHyphen += "-";
// }
// console.log(stringWithHyphen);

/*EXPLICACION:
1) PEDIMOS UNA CADENA DE TEXTO Y LA MODIFICAMOS.
2) LUEGO ESA CADENA DE TEXTO LE ELIMINAMOS LOS ESPACIOS CON UNA EXPRESION REGULAR (SACADA DE CHATGPT OBVIO).
3) CREAMOS UNA VARIABLE VACIA PARA EL STRING CON GUIONES.
4) CREAMOS UN FOR QUE RECORRA NUESTRO STRING Y LE DECIMOS QUE EN CADA VUELTA, LE AGREGUE UN - Hypen , POR LO QUE AL FINAL TENEMOS LETRA-LETRA-LETRA-LETRA */

// 15- Realiza un script que cuente el número de vocales que tiene un texto.
// solucion
let palabra = prompt("Ingresa una palabra: ").trim().toLowerCase();
let contador = 0;
const vocales = ["a", "e", "i", "o", "u"];

for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i])) {
    contador++;
  }
}
console.log(contador);

/*EXPLICACION:
1) DEFINIMOS LAS VARIABLES: UN PROMPT, UN CONTADOR Y UNA CONSTANTE CON LAS VOCALES A COMPARAR.
2) CREAMOS UN BUCLE FOR, DECIMOS QUE MIENTRAS QUE LA i SEA MENOR QUE LA LONGITUD DE LA PALABRA TIENE QUE EVALUAR CON UN CONDICIONAL IF. EN EL CONDICIONAL IF DECIMOS: SI EL ITERADOR [i](es lo mismo que decir si la letra de la variable palabra en la posicion i), TIENE UN VALOR QUE COINCIDE CON ALGUN VALOR DE MI ARRAY VOCALES, VOY A PERMITIRLE A LA VARIABLE contador QUE SUME 1.
Dato: El includes.() se usa para verificar si hay coincidencia de caracteres entre una variable y otra, en este caso, para verificar si hay coincidencias entre los caracteres de la variable palabra y los caracteres del array vocales.*/

// 16- Realiza un script que (pida una cadena de texto) y la (devuelva al revés). Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
// solucion
let userName = prompt("Ingresa tu nombre: ").trim();
console.log(userName);
let reverseArrayUserName = userName.split("");
console.log(reverseArrayUserName);
reverseArrayUserName.reverse();
console.log(reverseArrayUserName);
let reverseStringUserName = reverseArrayUserName.join("");
console.log(reverseStringUserName);

/* EXPLICACION
1) CREAMOS UN PROMPT
2) CREAMOS UNA VARIABLE QUE CONVIERTE EL PROMPT (string) EN ARRAY.
3) INVERTIMOS EL ARRAY CON .reverse("").
4) CONVERTIMOS EL ARRAY, EN UN STRING CON .join("").*/


// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
// solucion


