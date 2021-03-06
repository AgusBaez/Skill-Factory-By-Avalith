const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

async function getFilms() {
  const res = await fetch("https://ghibliapi.herokuapp.com/films");
  return await res.json();
}

async function getLocations() {
  const res = await fetch("https://ghibliapi.herokuapp.com/locations");
  return await res.json();
}

// async function getPeople() {
//   const res = await fetch("https://ghibliapi.herokuapp.com/people");
//   return console.log(await res.json());
// }

async function getFilmsByScore(score) {
  let films = await getFilms();
  let result = films.filter((film) => film.rt_score > score);
  //console.log(result);
  // Me devuelve todas las peliculas con rt_score mayor al puntaje pasado por parametro
}
async function getFilmsRanking() {
  // Me devuelve un array con todas las peliculas, unicamente con su titulo y su rt_score
  let films = await getFilms();
  films = films.map((film) => ({
    title: film.title,
    rt_score: film.rt_score,
  }));
  //ordenadas desc por score
  let result = films.sort(
    (greater, smaller) => smaller.rt_score - greater.rt_score
  );
  console.table(result);
}

async function getFilmByName(name) {
  // manera1
  // const res = await fetch(
  //   `https://ghibliapi.herokuapp.com/films?title=${name}`
  // );
  // const film = await res.json();
  // console.log(film);
  // manera2
  // const films = await getFilms();
  // let result = films.filter((film) => film.title === name);
  // console.log(result);
  //Manera 3
  const films = await getFilms();
  let result = films.filter((film) => film.title.includes(name));
  console.log(result[0]);

  // Me devuelve una pelicula que contenga las palabras pasadas por parametro
}

async function getPeopleFromFilm(name) {
  //obtengo la peli
  const films = await getFilms();
  let film = films.filter((film) => film.title === name)[0]; //Film filtrada

  let getPeople = film.people.map(async (peopleUrl) => {
    let peopleData = {}; //Donde se va a guarda las personas
    await fetch(peopleUrl) //Son los URL de las personas que llegan de la Film
      .then((res) => res.json()) //Estos URL los convierto en JSON para poder usarlos
      .then((data) => (peopleData = data.name)); // Almaceno los nombres que se pasaron a JSON
    return peopleData; //Devolveme las personas y solo con la clave "name"
  });
  //return fetch(getPeople).then(res => res.json());
  //resulvo todas las promesas
  let resolve = await Promise.all(getPeople); //Almaceno las promesas que se cumplieron
  //devuelve un arreglo con los valores de las promesas resultas
  console.table(resolve);
  // Me devuelve un array de objetos que son las personas que aparecen en una pelicula
}

//getFilms();
//getFilmByName("Castle in the Sky");
//getFilmsByScore("95");
//getFilmsRanking();
getPeopleFromFilm("Castle in the Sky");
