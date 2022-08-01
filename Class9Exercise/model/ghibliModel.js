const express = require("express");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//OBTENIENDO DATOS DE LA API..
let getFilms = () => {
  return fetch("https://ghibliapi.herokuapp.com/films").then((res) =>
    res.json()
  );
};

let movie = {
  getFilms,
};

module.exports = movie;
