let misPeliculasFavoritas = [
  "Star Wars",
  "Dragon Ball Hero",
  "Django Unchained",
];

let otrasPeliculasFavoritas = ["Sherk", "JoJo Rabbit", "Revenant"];

mostrarPelisFav = function () {
  pelis = [];
  for (let nLista = 0; nLista < misPeliculasFavoritas.length; nLista++)
    console.log(` N° ${nLista +1 } ${misPeliculasFavoritas[nLista]}`);
};

agregarPeliFavorita = function (nuevaPeli) {
  misPeliculasFavoritas.push(nuevaPeli);
};

agregarListaDePelis = function () {
  misPeliculasFavoritas.unshift(...otrasPeliculasFavoritas);
  console.log(misPeliculasFavoritas);
};

mostrarPelisFav(console.log("\n Mostrando Pelis..."));
agregarPeliFavorita("Los Minion", console.log("\n Agregando..."));
mostrarPelisFav(console.log("\n Mostrando Pelis..."));
agregarListaDePelis(console.log(" \n Agregando..."));
mostrarPelisFav(console.log("\n Mostrando Pelis..."));
