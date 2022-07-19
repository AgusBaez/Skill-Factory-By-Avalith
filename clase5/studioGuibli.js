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

async function getPeople() {
  const res = await fetch("https://ghibliapi.herokuapp.com/people");
  return await res.json();
}

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
    //console.log(result);
  }
  
  async function getFilmByName(name) {
    // const res = await fetch(
    //   `https://ghibliapi.herokuapp.com/films?title=${name}`
    // );
    // const film = await res.json();
    // console.log(film);
    const films = await getFilms();
    let result = films.filter((film) => film.title === name);
    console.log(result);
    // Me devuelve una pelicula que contenga las palabras pasadas por parametro
  }
async function getPeopleFromFilm(name) {
  //obtengo la peli
  const films = await getFilms();
  let film = films.filter((film) => film.title === name);
  let getPeople = film.map((peoples) => ({
    people: peoples.people,
  }));

  console.log(getPeople);
  // Me devuelve un array de objetos que son las personas que aparecen en una pelicula
}

//getFilms();
//getFilmByName("Castle in the Sky");
//getFilmsByScore("95");
//getFilmsRanking();

getPeopleFromFilm("My Neighbor Totoro");
