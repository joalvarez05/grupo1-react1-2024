/* 25/09/2024 
Tarea 1:
-Obtener un numero aleatorio entre 1 y 100
-Calcular la raíz cuadrada y mostrar en consola
-Elevarlo a la quinta potencia y mostrarlo en consola*/
// solucion
// let numeroAleatorio = parseInt(Math.random() * 101);
// console.log(numeroAleatorio);
// let raizCuadrada = parseInt(Math.sqrt(numeroAleatorio));
// console.log(raizCuadrada);
// let quintaPotencia = raizCuadrada ** 5;
// console.log(quintaPotencia);

/*EXPLICACION: 
1) DEFINIMOS UNA VARIABLE LA CUAL LLAMAMOS LA METODO MATH.RANDOM Y LE ESPECIFICAMOS QUE TIENE QUE SER DE 0 HASTA 100 EL VALOR QUE PUEDE ELEGIR.
2) LUEGO A ESE NUMERO RANDOM LE SACAMOS LA RAIZ CUADRADA.
3) LUEGO AL NUMERO QUE OBTUVIMOS, LO ELEVAMOS A LA 5TA POTENCIA.
*/

/*tarea 2:
-Crea una lista de numeros cualquiera y mostrar por consola
-El mayor y el menor*/
// solucion
// let listaRandom = [12, 24, 36, 48, 50, 0];
// let numeroMasGrande = Math.max(...listaRandom);
// let numeroMasPequeno = Math.min(...listaRandom);
// console.log(
//   `El numero mas grande es ${numeroMasGrande} y el numero mas pequeno es ${numeroMasPequeno}`
// );

/* EXPLICACION:
1) CREAMOS UN ARRAY CON NUMEROS ALEATORIOS. 
2) DETERMINAMOS EL NUMERO MAS GRANDE DEL ARRAY CON EL METODO MATH.MAX, PERO RECORDAMOS QUE PARA LLAMAR A LA VARIABLE DEL ARRAY HAY QUE HACERLO CON EL METODO DE PROPAGACION ... PORQUE RECORDEMOS QUE EL METODO MATH REALIZA UNA FUNCION INTERNA EN JAVASCRIPT, POR LO QUE SI EN TEORIA NO SE LA CANTIDAD DE PARAMETROS QUE TENGO QUE ANALIZAR EN LA FUNCION, PASO PROPAGACION ...
3) LUEGO LOS MOSTRAMOS POR PANTALLA 

/*tarea 3:
-Dados los siguientes numeros,
46.66987
98.66547
78.65997
-dejarlos con dos decimales y mostrarlos en consola*/
// let numeroConDecimalUno = 46.66987;
// let numeroConDecimalDos = 98.66547;
// let numeroConDecimalTres = 78.65997;

// let numeroConDosDecimalesUno = parseFloat(numeroConDecimalUno.toFixed(2));
// let numeroConDosDecimalesDos = parseFloat(numeroConDecimalDos.toFixed(2));
// let numeroConDosDecimalesTres = parseFloat(numeroConDecimalTres.toFixed(2));
// console.log(numeroConDosDecimalesUno);
// console.log(numeroConDosDecimalesDos);
// console.log(numeroConDosDecimalesTres);

/* EXPLICACION: 
1) CREAMOS 3 VARIABLES CON NUMEROS CON 5 DECIMALES.
2) CONVERTIMOS ESTOS NUMEROS CON 5 DECIMALES, A NUMEROS CON SOLAMENTE 2 DECIMALES CON EL .TOFIXED(2), SIEMPRE USANDO PARSEFLOAT PARA QUE SE CONVIERTA A TIPO NUMBER.
3) MOSTRAMOS POR CONSOLA EN DISTINTAS LINEAS, LOS VALORES OBTENIDOS.
