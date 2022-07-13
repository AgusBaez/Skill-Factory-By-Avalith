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
console.log("- Shifteando..." + arr + '\n');
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
console.log('\n Creando array...');
console.log(Array.from("PePiTo"));
//Creacion de array con CallBack:
let arrViejo = ["Tructurin", "Deses"];
console.log('El nuevo array es...');
console.log(Array.from(arrViejo, (callback) => (arrViejo += callback)));
/*
Array.from() Es un metodo estatido --- Llama a la clase Array que es un objeto y entiende que tiene que hacer en base al metodo que le dimos
Por que?
Por que no haace falta inicializar una variable para que este viva
*/

// splice(Acortar un array , eliminar el resto, añadir nuevo elemento)
console.log('\n Modificando arr2...');
arr2.splice(2, 1, "Pepito");
console.log(arr2);


console.log("\n /*Ejercicio*/");
function crearAuto(marca, maxVelocidad, precio) {
  return {
    marca,
    maxVelocidad,
    precio,
  };
}
let listaDeAutos = [
  crearAuto("Fitito", 50, 2000.5),
  crearAuto("Ferrari", 100, 24000.5),
  crearAuto("BMW", 70, 33000.5),
  crearAuto("Ferrari", 150, 54000.5),
];
let listaDeConductores = ["Alberto", "Pedro", "Hamilton", "Alonso"];

//iterando con la condicion del precio
let filtroPrecio = listaDeAutos.filter((crearAuto) => crearAuto.precio < 25000);
console.log(filtroPrecio);

//2- Un auto de la lista que tenga marca Ferrari y una velocidad maxima de 100
let filtroMarca = listaDeAutos.find(
  (crearAuto) => crearAuto.marca === "Ferrari" && crearAuto.maxVelocidad === 100
);
console.log(filtroMarca);

// Un nuevo array de objetos con objetos que tengan las caracteristicas de un auto + el nombre del conductor. El primer conductor de la lista tiene que estar con el primer auto del arra
let objConcatenado = listaDeAutos.map((newAuto, contador) => {
  return {
    ...newAuto,
    conductor: listaDeConductores[contador],
  };
});
