/* 
Esta clase presenta la menera de manipular Objetos y Arrays

Metodos del Array JS
*/

//Agregar/Eliminar Elementos:
let arr = [0];
console.log("Inicializa el array...");
//Agrega al FINAL del array un elemento
arr.push(1, 2, 3);
console.log("- Pusheando..." + arr);
//Eliminando el ULTIMO elemeto
arr.pop();
console.log("- Popeando..." + arr);
//Agrega al PRINCIPIO del array un elemento
arr.unshift(-1);
console.log("- UnShifteando..." + arr);
//
arr.shift();
console.log("- Shifteando..." + arr + "\n");
/*
Para agregar elementos a un array existen metodos para instertar al final o al principio y en un espacio en particular
Estos metodos vn de la mano con: la logica de La Estructura de Datos (FiFi, LiLo, ...) esta Estructuracion depende del control que querramos darx
*/

//Indices de un Array(aveces string) Existis y en donde estas? si no existe devuelve -1
let arr2 = ["Jorge", "Alexis", "Alexis", "Guillermo"];
console.log(arr2);
let buscadorEnArray = arr2.indexOf("Alexis");
console.log(
  "El Elemento/Objeto del array se encuentra en la posicion: " + buscadorEnArray
);

//FindIndex: Si cumple la condicion DEVUELVE la indice del primer elemento que CUMPLA con la condicion, si no la cumple devuelve -1
const nombreMasLargo = arr2.findIndex((a) => a === "x" || a === "Alexis"); //podemos ver al argemento de la funcion 'a' Actuando como callback
console.log("La condicion se cumple en el indice del array: " + nombreMasLargo);

// Creacion de un Array
console.log("\n Creando array...");
console.log(Array.from("PePiTo"));
//Creacion de array con CallBack:
let arrViejo = ["Tructurin", "Deses"];
console.log("El nuevo array es...");
console.log(Array.from(arrViejo, (callback) => (arrViejo += callback)));
/*
Array.from() Es un metodo estatido --- Llama a la clase Array que es un objeto y entiende que tiene que hacer en base al metodo que le dimos
Por que?
Por que no haace falta inicializar una variable para que este viva
*/

//Metodos del prototipo array = reduce y splice

//Para reduce podemos jugar con los valores dentro del array para devolver un solo valor(un unico valor)
const array1 = [1, 2, 3, 4];
//suamr valores del array
// 0 + 1 + 2 + 3 + 4
const acumulador = 5;
// reduce(acumulador, valorActual, IndiceActual, Array)
const sumWithInitial = array1.reduce(
  //(callback)reduce el array, con la condicion que le des(primer parametro) iterando por el array y el resultado del callback se guarda en otra variable(segundo parametro)
  (prevValue, actuValue) => prevValue + actuValue,
  acumulador
);
//callback = funcion que llamaremos mas tarde, como la toodles de mikimause que tiene mikiherramientas, una onda asi
console.log(sumWithInitial);
// expected output: 15

//splice().. Cortando un array
const diaSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
console.log(diaSemana);
//Uso normal: mete datos en el array, o se pueden sacar muchos elementos juntos
diaSemana.splice(1, 0, "corte");
console.log(diaSemana);
//- donde, - desde el valor anterior cuantos deleteo?, - el dato a reemplazar(opcional)

//ENTENDER 100% REAL NO FAKE
//Siempre va a haber un array crado previamente para usar estos metodos:

// FILTER(): se usa para filtrar por una función(callback) que defina la condición
//Filtrame los nombres con un tamaño menos a 5 letras
let nombres = ["Alexis", "Agus", "Babuino", "Jose", "Pepito", "Sofia"];
let filtranding = nombres.filter((nombre) => nombre.length < 5);
console.log(filtranding);

// FIND(): devuelve el PRIMER DATO del array que cumpla con función(callback)
//parecido a IndexOf pero no devuelve el indice del array, devuelve el dato(elemento)
//Buscame un numero que se mayor que 30
let arrNum = [5, 15, 25, 35, 45, 55];
let buscaNumero = arrNum.find((callback) => callback > 30);
console.log(buscaNumero);

// MAP(): genera un array completamente nuevo(desestructura?) a partir de la función(callback) usando los elementos del array como parametros
//Generaremos un nuevo array multiplicado * 2
let newArr2 = [1, 3, 5, 7, 9];
//operacion
let multiplicador = newArr2.map((x) => x * 2);
//nueva copia, nada que ver con la anterior
console.log("Multiplicando..");
console.log(multiplicador);
//mas complejo
const pareja = newArr2.map((callback) => [callback, callback]);
console.log("Creando parejas...");
console.log(pareja);
//Aun mas complejo
const mascotas = [
  { nombre: "firulais", edad: 5, tipo: "perro" },
  { nombre: "michi", edad: 12, tipo: "gato" },
  { nombre: "roger", edad: 3, tipo: "perro" },
  { nombre: "lola", edad: 10, tipo: "gato" },
];
//crear arreglo solo con los nombre y  el tipo
const tipoMascota = mascotas.map((res) => res.nombre + " es " + res.tipo);
console.log(tipoMascota);

//Destructuring
let a, b, res;
[a, b] = [1, 2];
console.log('Ahora "b" tiene este valor: ' + b);
[a, b, ...res] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Desestructurando..${res}`);
