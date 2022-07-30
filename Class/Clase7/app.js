//requiere nos permite traer funciones o librerias especificas e igualarlas a una variable
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");
const exp = express();
const port = 3000;

function getFilmId(id) {
  return fetch("https://ghibliapi.herokuapp.com/films/" + id).then((res) =>
    res.json()
  );
}

function getFilm() {
  return fetch("https://ghibliapi.herokuapp.com/films/").then((res) =>
    res.json()
  );
}

function getProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

//HTTP Request(get,post,put & delet)
/*("/") se lo llama el PATH */
exp.get("/", (req, res) => {
  /*res = response, req= require Tiene la informcion de la URL(localhost:3000/api/user?email=&password=)*/
  res.send("Hello Word¡");
  //method .send - Sends the HTTP response.
});

exp.get("/pibe", (req, res) => {
  //.query paramentros del url(endpoint) que llega en req.
  console.log(req.query);
  res.send("Agus es un buen pibe");
});

//Pelicula por id
exp.get("/film/:id", async (req, res) => {
  res.send(await getFilmId(req.params.id));
});

//Obtener mas de una peli por id
exp.get("/films", async (req, res) => {
  let filmsID = Object.values(req.query);
  let films = filmsID.map(async (films) => {
    return await getFilmId(films);
  });
  // await Promise.all(films) o tambien >>>>>
  // await Promise.all(films).then((data) => res.send(data));
  res.send(await Promise.all(films));
  console.log(films);
});

//Obtener los productos filtrados
exp.get("/producto", async (req, res) => {
  let products = await getProducts();
  products = products.map((product) => ({
    title: product.title,
    price: product.price,
  }));
  let result = products.sort(
    (primero, segundo) => segundo.price - primero.price
  );
  res.send(result);
});

//Mi propio Offset y limit
exp.get("/producto/filtro", async (req, res) => {
  let products = await getProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
  }));

  let limit = Object.values(req.query); // ?limit= valor del limite, este valor de elementos a cortar se usara con slice
  let filtro = products.slice(limit[0] - 1, limit[1]);
  let result = filtro.sort((primero, segundo) => segundo.price - primero.price);
  res.status(200).send(result);
  /*try {
    res.status(200).send(filtro);
  } catch {
    res.status(401).send("Bad request");
  }*/
});

// A ver si funciona con la api de guibli..
exp.get("/films/filtro", async (req, res) => {
  let films = await getFilm();
  let limitator = Object.values(req.query);
  let filtro = films.slice(limitator[0] - 1, limitator[1]);

  // await Promise.all(films) o tambien >>>>>
  await Promise.all(filtro).then((data) => res.send(data));
});

//Metodo para la redireccion
exp.get("/google", (req, res) => {
  res.status(302).redirect("https://www.google.com/");
});

//Levanta la app en el puerto 'port'
exp.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
