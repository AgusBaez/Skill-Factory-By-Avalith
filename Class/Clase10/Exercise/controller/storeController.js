//Requiero de los datos..
const getStoreModel = require("../model/storeModel");

const getProductPrice = async (req, res) => {
  let products = await getMappedProducts();
  let sortLimit = req.query.order;

  if (sortLimit !== undefined) {
    if (sortLimit === "desc") {
      products.sort((a, b) => b.price - a.price);
      res.status(200).send(products);
    } else if (sortLimit === "asc") {
      products.sort((a, b) => a.price - b.price);
      res.status(200).send(products);
    } else if (sortLimit !== String) {
      let filtro = products.slice(sortLimit[0] - 1, sortLimit[1]);
      res.status(200).send(filtro);
    }
  } else {
    res.status(200).send(products);
  }
};

const getProductsInCategories = async (req, res) => {
  const allCategory = await getStoreModel.getCategories();

  let productsByCategory = allCategory.map(async (category) => {
    return await getStoreModel.getByCategories(category);
  });

  let dataCategory = await Promise.all(productsByCategory).then((data) => {
    return data;
  });

  return dataCategory;
};

const getByCategoryExpensive = async (req, res) => {
  //Todos los Productos
  let products = await getProductsInCategories();

  //DE TODOS LOS PRODUCTOS EL QUE TENGA PRICE EL MAYOR
  const getProductsByCategory = products[0];

  console.log(getProductsByCategory);
  res.status(200).send(getProductsByCategory);
};

const getAllProductByCategory = async (req, res) => {
  const allCategory = await getStoreModel.getCategories();

  let productsByCategory = allCategory.map(async (category) => {
    return await getStoreModel.getByCategories(category);
  });

  let dataCategory = await Promise.all(productsByCategory).then((data) => {
    return data;
  });

  res.status(200).send(dataCategory);
};

const getProductByCategory = async (req, res) => {
  let data = req.params.categories;
  console.log(data);
  let products = await getStoreModel.getProducts(data);

  let result = products.filter((product) => product.category.includes(data));
  console.log(result);
  res.status(200).send(result);
};

let getMappedProducts = async (req, _res) => {
  let products = await getStoreModel.getProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
  }));
  return products;
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  let products = await getMappedProducts();
  products = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    rating: product.rating,
  }));
  res.status(200).send(products[id - 1]);
};

/* USERS */
let getUsers = async (req, res) => {
  let users = await getStoreModel.getUsers();
  res.status(200).send(users);
};

let get3Users = async (req, res) => {
  let users = await getStoreModel.get3Users();

  res.status(200).send(users);
};

/* CARTS */
let getCarts = async (req, res) => {
  let carts = await getStoreModel.getCarts();
  res.status(200).send(carts);
};

const storeController = {
  getProductById,
  getProductPrice,
  getProductByCategory,
  getAllProductByCategory,
  getByCategoryExpensive,
  getUsers,
  get3Users,
  getCarts,
};

module.exports = storeController;
