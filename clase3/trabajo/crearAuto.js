// splice(Acortar un array , eliminar el resto, añadir nuevo elemento)
console.log("\n Modificando arr2...");
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
