const express = require("express");
const router = express.Router();
//requiero la carpeta Controller
const storeController = require("./controller/storeController");
const movieController = require("./controller/ghibliController");
//requiero middleware
const { myDate, today, month } = require("./middleware/dates");
const errorHandler = require("./middleware/errorHandler");

router.get("/ghibli/byscore", movieController.getFilmsByScore)

//Obtener los productos filtrados
router.get("/producto/filter", [myDate, today, month], storeController.getFilter);

router.get("/producto/limit", storeController.getLimit);

router.get(
  "/producto/byname",
  [myDate, today, month],
  storeController.getProductByName
);

router.get("/", (req, res) => {
  res.redirect("index.html");
});

router.use(errorHandler.notFound);

module.exports = router;
