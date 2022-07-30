const express = require("express");
const router = require("./router");
const exp = express();
const port = 3000;

/* NUEVA RAIZ DE ADJUNCION DE ENDPOINTS */
//exp.use("/producto", router);// ACCEDE A OTROS ENDPOITNS

//SIEMPRE TIENE PRIORIDAD EL PRIMER ROUTER/***CUIDADO***/ >>>>

//Se usa como default, se lo denomiza RAIZ de RAICES??? por que se le adjuntan diferentes endpoints
exp.use("/", router); //IGUALA TODAS LAS RUTAS
//CUANDO SE REQUIERE ESTE ENDPOINT ROUTER SE OCUPA DE BUSCAR EN TODOS LOS ROUTINGS Y DESPUES PUEDE SEGUIR CON OTROS ENDPOINTS DEL ROUTERS
//ESTE SE DENOMINA AL FINAL POR QUE SI NO PISA OTROS ENDPOINTS
//ESTEE S EL ESTANDAR HACIA TODA LA RAICES DE LAS RUTAS


//Levanta la app en el puerto 'port'
exp.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
