const express = require("express");

//"""""Conexion a la base de datos"""""
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
}

//DECLARACION DE OBJETO PARA EXPORTACION DE FUNCIONES
let product = {
  getProducts,
};

module.exports = product;
