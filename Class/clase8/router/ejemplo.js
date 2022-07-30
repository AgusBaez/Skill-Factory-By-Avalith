const express = require("express");
const router = express.Router();
// Dedfinir un EndPoint de una ruta con una FUNCION para todos los ENDPOITS¡¡ coooomo?
router.use((req, res) => {
  console.log("Time: ", Date.now());
  next();//siguiente
  //Otro middleware, una funcion despues de otra
});
/* <<<<<< TODOS LOS ENDPOINT QUE PERTENECEN A ESTE ROUTER SE LES VA A SETEAR EL LOG */

// SALVO QUE CREE UN ENDPOINT NUEVO ANTES DE LA RAIZ DE RUTAS GENERICA "router.use("/")"

//exportar el router para usarlas en otro archivo con require
module.exports = router;
