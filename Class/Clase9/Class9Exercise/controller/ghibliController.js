const getMovies = require("../model/ghibliModel");

//OBTENIENDO LAS PELICULAS QUE INCLUYA EL PARAMETRO STRING 'NAME'
// async function getFilmByName(name){
//     let films = await getFilms();
//     return films.find(film => film.title.includes(name))
// }

//DEVUELVE LA PELICULA POR SCORE.
let getFilmsByScore = async (req, res) => {
  // Me devuelve todas las peliculas con rt_score mayor al puntaje pasado por parametro
  let films = await getMovies.getFilms();
  let score = Object.values(req.query);
  let byScore = films.filter((film) => film.rt_score > score);
  res.status(200).send(byScore[0]);
  //http://localhost:3000/ghibli/byscore?score=100
};

//DEVUELVE LAS PERSONAS DE LA PELICULA SEGUN EL NOMBRE DE LA PELICULA
// async function getPeopleFromFilm(name) {
//     // Me devuelve un array de objetos que son las personas que aparecen en una pelicula
//     let film = await getFilmByName(name);
//     let peopleUrls = film.people;
//     let people = peopleUrls.map(async url => {
//         return await fetch(url).then(res => res.json());
//     })
//     return Promise.all(people);
// }

//RETORNANDO FUNCIONES..
let films = {
  // getFilms,
  // getLocations,
  // getFilmByName,
  getFilmsByScore,
  //getPeopleFromFilm
};

module.exports = films;
