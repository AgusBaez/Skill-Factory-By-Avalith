//Requiero de los datos..
const getStoreProducts = require("../model/storeModel");

//TODAS LAS FUNCIONES EN EL CONTROLADOR REQUIEREN:
// REQUEST y RESPOSE
let getFilter = async (req, res) => {
  //http://localhost:3000/producto
  let products = await getStoreProducts.getProducts();
  products = products.map((product) => ({
    title: product.title,
    price: product.price,
  }));
  let result = products.sort(
    (primero, segundo) => segundo.price - primero.price
  );
  console.log(`Requested product at ${req.today + ' of ' + req.month}`);
  res.status(200).send(result);
};

let getLimit = async (req, res) => {
  //http://localhost:3000/producto/limit?limit=5&other=8
  let products = await getStoreProducts.getProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
  }));
  let limit = Object.values(req.query); // ?limit= valor del limite, este valor de elementos a cortar se usara con slice
  let filtro = products.slice(limit[0] - 1, limit[1]);
  let result = filtro.sort((primero, segundo) => segundo.price - primero.price);
  res.status(200).send(result);
};

let getProductByName = async (req, res) => {
  //http://localhost:3000/producto/byname?name=Acer
  const products = await getStoreProducts.getProducts();
  let name = Object.values(req.query);
  let result = products.filter((product) => product.title.includes(name));
  // Me devuelve una pelicula que contenga las palabras pasadas por parametro
  console.log(`Requested product by name: ${name} at ${req.today + ' of ' + req.month}`);
  res.status(200).send(result[0]);
};

const storeController = {
  getFilter,
  getLimit,
  getProductByName,
};

module.exports = storeController;
