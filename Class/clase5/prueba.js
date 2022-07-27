const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

async function getFilms() {
  const res = await fetch("https://ghibliapi.herokuapp.com/films");
  return await res.json();
}
async function getFilmByName(name) {

    const films = await getFilms();

    let result = films.filter((film) => film.title.includes(name)
    );
    console.log(result[0]);
    
    // Me devuelve una pelicula que contenga las palabras pasadas por parametro
}
getFilmByName('T')