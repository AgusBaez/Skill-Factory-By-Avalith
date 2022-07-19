const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

function get5Products() {
  return fetch("https://fakestoreapi.com/products?limit=5").then((res) =>
    res.json()
  );
}

function getProducts() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

function getCategories() {
  return fetch("https://fakestoreapi.com/products/categories").then((res) =>
    res.json()
  );
}

function getProductsByCategory(category) {
  return fetch("https://fakestoreapi.com/products/category/" + category).then(
    (res) => res.json()
  );
}

function getLimitedProducts(limit) {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => products.filter((product) => product.id <= 14));
}

async function getProductsPriceOrdered() {
  let products = await getProducts();
  products = products.map((product) => ({
    title: product.title,
    price: product.price,
  }));
  let result = products.sort(
    (primero, segundo) => segundo.price - primero.price
  );
  return result;
}

async function getAllProductsSeparatedByCategory() {
  let categories = await getCategories();
  let productsByCategory = categories.map(async (categories) => {
    return await getProductsByCategory(categories);
  });
Promise.all(productsByCategory).then((data) => console.log(data));  
}

getAllProductsSeparatedByCategory();
