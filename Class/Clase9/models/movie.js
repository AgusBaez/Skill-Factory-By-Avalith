//EL CODIGO TIENE QUE SER INDEPENDIENTE!
// **TODO LO QUE TERMINA BIEN ESTA BIEN**

//MODELO SE ENCARGA DE LOS DATOS(PUEDE CONSULTAR A LA BASE DE DATOS)
//PEDIDOS QUE LLEGAN DESDE EL CONTROLADOR (get, post, put, path, delete)

// ORIENTADO A OBJETOS (modelos van a ser objetos de funcionalidades o objetos de datos)
//ITERACTUAMOS CON OBJETOS DE LAS BASES DE DATOS Y A ESTOS OBJETOS LES DAMOS UNA FUNCIONALIDAD

//LA BASE DE DATOS QUE VA A DEVOLVER DATOS PARA QUE SE PROCESEN EN LOS CONTROLADORES

//funciones internas
//C.R.U.D
/*
**FUNCIONALIDADES QUE SE PUEDEN ENCONTRAR:**
 - BUSQUEDAS
 - ACTUALIZACIONES
 - CONSULTAS
 - ETC
*/

//IMPORTANDO FETCH..
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

//OBTENIENDO DATOS DE LA API..
let getFilms = () => {
  return fetch("https://ghibliapi.herokuapp.com/films").then((res) =>
    res.json()
  );
};

//LAS FUNCIONES TIENEN QUE TENER UNA UNICA RESPONSABILIDAD (ORGANIZAR POR NOMBRE EJEMPLO:)
//Y SOLO MODIFICAR FUNCIONALIDADES ESPECIFICAS

//OBTENIENDO LAS PELICULAS QUE INCLUYA EL PARAMETRO STRING 'NAME'
// async function getFilmByName(name){
//     let films = await getFilms();
//     return films.find(film => film.title.includes(name))
// }

//DEVUELVE LA PELICULA POR SCORE.
async function getFilmsByScore(score) {
  // Me devuelve todas las peliculas con rt_score mayor al puntaje pasado por parametro
  let films = await getFilms();
  return films.filter((film) => film.rt_score > score);
}

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
