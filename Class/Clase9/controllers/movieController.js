//ACCEDE EL CLIENTE DANDO ORDENES EL CONTROLADOR SOLICITAR DATOS DEL MODELO Y TERMINA COMUNICANDOLO A LA VISTA:
//RECIBE INPUT Y REALIZA

//EL CONTROLADOR ENVIA Y RECIBE DATOS(HTTP REUQEST) HACIA EL MODELO
// O TAMBIEN ENVIA DATOS DIRECTOS A LA VISTA

//MANEJA HTTP REQUEST
//FUNCIONALIDADES QUE SE PUEDEN ENCONTRAR:
/*
- GET - REQUEST PARA OBTENER
- POST - REQUEST PARA INSERTAR/CAMBIA DATO NUEVO(O NO) Y CREA UN CAMBIO DE ESTADO
- PUT - REQUEST PARA ACTUALIZAR DATO DEL MODELO (EDIT) (TODA LA ENTIDAD)
- PATH - REQUEST PARA ACTUALIZAR PARTE/S DE DATO/S (POCO USADO)
- DELET - REQUEST PARA ELIMINAR UN/OS DATO/S
*/

//MIDDLEWARES

const { getFilmByName } = require("../models/movie");
const movies = require("../models/movie");

const getRanking = async (req, res) => {
  let films = await movies.getFilms();
  let ranking = films.map((film) => ({
    title: film.title,
    score: film.rt_score,
  }));
  ranking.sort((a, b) => b.score - a.score);
  res.status(200).send(ranking);
};

const getMovieByName = async (req, res) => {
  let name = req.params.name;
  let movie = await getFilmByName(name);
  console.log(`User requested movie with name ${name} at day ${req.today}`);
  res.status(200).send(movie);
};

const getMovieByScore = async (req, res) => {
  let score = req.params.score;
  let movie = await getFilmByScore(score);
  console.log(`User requested score with name ${score}`);
};

const movieController = {
  // getRanking,
  // getMovieByName,
  getMovieByScore,
};

module.exports = movieController;
