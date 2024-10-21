// function multiplicar(numero) {
//     return numero * 2
// }

// const numeros = [1, 2, 3, 4, 5];

// console.log(procesarNumeros(numeros, multiplicar))

// Callbacks asincronos: se ejecuntan despues de un tiempo, generalmente sirven para funciones que no sabemos cuando termiaran (ej, llamadas a servidores)

// function mostrarMensaje() {
//     console.log("Hola soy un mensaje, despues de 3 segundos")
//     setTimeout(() => { console.log("mensaje despues de 1 segundo") }, 1000)
// }

// setTimeout(mostrarMensaje, 3000)

// mostrarMensaje()

// console.log("Mensaje 1")
// setTimeout(() => {
//     console.log("Mensaje 2")
// }, 3000)
// console.log("Mensaje 3")

// Problemas potenciales (Callback Hell)
// Si no se organizan bien, los callbacks pueden dar lugar a un fenómeno llamado callback hell, donde las funciones se anidan de forma excesiva, creando código difícil de leer y mantener.
// doSomething(function (result) {
//     doSomethingElse(result, function (newResult) {
//         doThirdThing(newResult, function (finalResult) {
//             console.log('Todo hecho.');
//         });
//     });
// });
// Para mitigar este problema, existen soluciones como las promesas y la sintaxis async/await, pero esas son cuestiones más avanzadas.

// METODOS DE ARRAYS

// Metodo .SORT()
// ordena en orden alfabetico, de mayor a menor o al reves

// let nombresOrdenados = nombres.sort()
// console.log(nombresOrdenados)

// let numerosOrdenados = numeros.sort(function (a, b) {
//     return a - b
// })

// console.log(numerosOrdenados)

// Metodo .filter()
// devuelve todos los elementos que cumplan con el filtro
// let pares = numeros.filter((numero) => {
//     return numero > 100
// })

// console.log(pares)

// Metodo .find()
// devuelve el primer elemento que cumpla con la condicion
// let busquedaNombre = nombres.find((nombre) => {
//     return nombre.startsWith("J")
// })

// console.log(busquedaNombre)

// Metodo .findIndex()
// recorre todo el Array, y devuelve el indice del elemento que cumpla la condicion

// let indice = nombres.findIndex((nombre) => {
//     return nombre === "Antonio"
// })

// console.log(indice)

// const numeros = [95, 46, 2, 67, 63, 612, 4, 874]

// const nombres = ["Joaquin", "Lionel", "Angel", "Antonio", "Emiliano"]

// Metodo .forEach()
// recorre todo el array y realiza una funcion por cada elemento

// nombres.forEach((nombre) => {
//     console.log(nombre)
// })

// Metodo .map()
// recorre todo el array y devuelve uno nuevo

// let resultados = numeros.map((numero) => {
//     return numero + 1
// })

// console.log(resultados)

// Ejercicio 1: Crear una función con un callback personalizado

// Deben crear una función llamada procesarDatos que reciba un array y un callback. El callback determinará cómo procesar los datos del array. Puede ser una suma, resta, multiplicacion o division como el ejemplo de clases, pero usando map o foreach
// solucion
// Callback sincrono: Se ejecuta inmediatamente en orden que son llamados
// function procesarNumeros(numeros, multiplicar) {
//     const resultado = []
//     for (let i = 0; i < numeros.length; i++) {
//         resultado.push(multiplicar(numeros[i]))
//     }
//     return resultado
// }

// function sumarDatos(numero) {
//   let suma = 
// }

// const numeros = [95, 46, 2, 67, 63, 612, 4, 874];
// let multiplicacion = numeros.map((numero) => numero * 2);
// console.log(multiplicacion);

// function multiplicar(numero) {
//   return numero * 3;
// }

// function procesarDatos(numeros, multiplicar) {
//   let resultado = numeros.map((numero) => multiplicar(numero));
//   return resultado;
// }

// console.log(procesarDatos(numeros, multiplicar));

// function sumar(numero) {
//   return numero + 1;
// }

// function procesarDatos(numeros, sumar) {
//   let resultado = numeros.map((numero) => sumar(numero));
//   return resultado;
// }

console.log(procesarDatos(numeros, sumar));

// Ejercicio 2: Filtrar y encontrar nombres con callbacks

// Deben filtrar un array de nombres para encontrar aquellos que comiencen con una letra específica. Luego, deben encontrar el primero que cumpla esa condición.
// 21:15 regresamos
// solucion
let names = ["mauricio", "benjamin", "jose", "marcos", "marcos1", "marcos2"];

let namesNuevos = names.filter((name) => {
  return name.startsWith("m");
});

// para que me devuelva uno solo uso el .find().
// let namesNuevos = names.find((name) => {
//   return name.startsWith("m");
// });

console.log(namesNuevos);

let nuevosNombres = [
  "jose",
  "Jose",
  "Mauricio",
  "mauricio",
  "Benjamin",
  "carlos",
  "benjamin0",
  "benjamin1",
  "benjamin2",
];

let nombresSegunInicial = nuevosNombres.filter((nombre) => {
  return nombre.startsWith("b");
});

// Ahora hacer lo mismo que hicimos, pero aplicandole funciones para que despues directamente llamemos a esas funciones y se ejecute la accion, cosa que le pueda cambiar los parametros (le pueda pasar diferentes arrays o lo que sea).
