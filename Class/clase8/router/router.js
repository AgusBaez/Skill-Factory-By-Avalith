/*
Para usar ROUTERS es necesario usar de express el objeto ROUTER
Se usa para crear:
Instancia de Router
Rutas Montables y Modulares
Se considera Middleware y direccionamiento completo(Manipulacion)
*/
// Requiero de express el obj para instanciar rutas que se va a almacenar en una variable

const router = express.Router();

// Dedfinir un EndPoint
router.get("/", (req, res) => {
    res.send("Hello Word¡");
  });

//exportar el router para usarlas en otro archivo con require
module.exports = router;
