//Requiero de los datos..
const getStoreModel = require("../model/storeModel");

let getMappedProducts = async (req, _res) => {
  let products = await getStoreModel.getProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
  }));
  return products;
};

let getProductById = async (req, res) => {
  const id = req.params.id;
  let products = await getStoreModel.getProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    rating: product.rating,
  }));
  console.log(
    `Requested Store Products By ID: ${id} on ${req.today + " of " + req.month}`
  );
  res.status(200).send(products[id - 1]);
};

const getProductMethods = async (req, res) => {
  let products = await getMappedProducts();
  let sorted = req.query.order;
  let limited = req.query.limit;

  if (typeof sorted == 'string') {
    if (sorted === "desc") {
      products.sort((a, b) => b.price - a.price);
      res.status(200).send(products);
    } else if (sorted === "asc") {
      products.sort((a, b) => a.price - b.price);

      res.status(200).send(products);
    }
    console.log(
      `Requested Store Products Sorted: ${sorted} on ${
        req.today + " of " + req.month
      } ${typeof sorted}`
    );
  } else if (limited !== undefined) {
    let filtro = products.slice(limited-1, products.length);
    console.log(
      `Requested Store Products Limited: ${limited} on ${
        req.today + " of " + req.month
      }`
    );
    res.status(200).send(filtro);
  }
  else {
    res.status(200).send(products);
  }
};

/* CARTS */
let getCarts = async (req, res) => {
  let carts = await getStoreModel.getCarts();
  console.log(`Requested all Store Carts at ${req.today + " of " + req.month}`);
  res.status(200).send(carts);
};

/* USERS */
let getUsers = async (req, res) => {
  //http://localhost:3000/producto
  let users = await getStoreModel.getUsers();
  console.log(`Requested all Store Carts at ${req.today + " of " + req.month}`);
  res.status(200).send(users);
};

// let getFilter = async (req, res) => {
//   //http://localhost:3000/producto
//   let products = await getStoreProducts.getProducts();
//   products = products.map((product) => ({
//     title: product.title,
//     price: product.price,
//   }));
//   let result = products.sort(
//     (primero, segundo) => segundo.price - primero.price
//   );
//   console.log(`Requested product at ${req.today + ' of ' + req.month}`);
//   res.status(200).send(result);
// };

// let getProductByName = async (req, res) => {
//   //http://localhost:3000/producto/byname?name=Acer
//   const products = await getStoreProducts.getProducts();
//   let name = Object.values(req.query);
//   let result = products.filter((product) => product.title.includes(name));
//   // Me devuelve una pelicula que contenga las palabras pasadas por parametro
//   console.log(`Requested product by name: ${name} at ${req.today + ' of ' + req.month}`);
//   res.status(200).send(result[0]);
// };

const storeController = {
  getProductById,
  getProductMethods,
  getCarts,
  getUsers,
  // getFilter,
  // getProductByName,
};

module.exports = storeController;
