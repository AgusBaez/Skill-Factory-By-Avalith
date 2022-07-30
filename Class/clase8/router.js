const express = require("express");
const router = express.Router();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

function getFilms() {
  return fetch("https://ghibliapi.herokuapp.com/films").then((res) =>
    res.json()
  );
}
function getProduct(id) {
  return fetch("https://fakestoreapi.com/products/" + id).then((res) =>
    res.json()
  );
}

//Funcion para new Date para poder usarse con req.date
// function myDate(req, res, next) {
//     req.date = new Date();
//     next();
// }

function today(req, res, next) {
  let today = new Date();
  req.today = today.getDay();
  next();
}

function month(req, res, next) {
  let today = new Date();
  req.month = today.getMonth();
  next();
}

//Requerir el tiempo actual:
router.use(function timeLog(req, res, next) {
  req.time = "Time: " + Date.now();
  next();
});

//Uso la funcion (Requerir tiempo actual) para imprirla
function helloWorld(req, res) {
  // string + middleware creado antes
  res.send("Hello World! Its: " + req.today + " of " + req.month);
}

// // router.use('/entro', (req, res, next) => {
// //     console.log("ENTRO");
// //     next();
// // })

//today = callback de una funcion Middleware
router.get("/agus", today, (req, res) => {
  console.log(req.query);
  res.send("Agustin es un buen pibe los dias " + req.today);
});

router.get("/agus/dia", today, (req, res) => {
  res.send("Hoy " + req.today + " es un buen dia para Agustin");
});

// router.post('/post', (req, res) => {
//     res.send('hola');
// })

// router.get('/producto', async (req,res) => {
//   let productIDs = Object.values(req.query);
//   console.log(req.body);
//   let products = productIDs.map(async product => {
//     return await getProduct(product);
//   });
//   res.send(await Promise.all(products))
// })

// router.get('/ghibli', async (req, res) => {
//     let films = await getFilms();
//     let ranking = films.map(film => ({
//         title: film.title,
//         score: film.rt_score
//     }));
//     ranking.sort((a,b) => b.score - a.score);
//     res.status(200).send(ranking);
// })

// router.get('/notFound', (req,res) => {
//     res.send('NOT FOUND')
// })

//El arreglo de middleware tambien determina el orden de las ejecuciones de las funciones
router.get("/", [today, month], helloWorld);

//Next() pasa a la siguiente o saltea

//ATACANDO ERRORES CUIDADO¡¡

//SI NINGUNA CONSULTA COINCIDE ENTRA A LA DEFAULT
router.use((req, res, next) => {
  res.status(404).send("NOT FOUND (404)");
  //PODRIA REDIRRECCIONAR A UN VIEW 404 (MVC)

  //PODRIA REDIRECCIONAR A OTRA PAGINA
  //res.redirect("https://www.google.co/");
});

module.exports = router;
