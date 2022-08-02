const express = require("express");
const router = express.Router();
//requiero la carpeta Controller
const storeController = require("./controller/storeController");
//requiero middleware
const dates = require("./middleware/dates");
const errorHandler = require("./middleware/errorHandler");

/* Products 
<<< router >>>
All Products
http://localhost:3000/store/products
Products asc
http://localhost:3000/store/products/?order=asc
Products desc
http://localhost:3000/store/products/?order=desc
Product By ID
http://localhost:3000/store/products/7

*/
router.get(
  "/store/products/",
  [dates.myDate, dates.today, dates.month],
  storeController.getProductMethods
);
router.get(
  "/store/products/:id",
  [dates.myDate, dates.today, dates.month],
  storeController.getProductById
); 
/* Carts */
//All Carts: http://localhost:3000/store/carts
router.get(
  "/store/carts",
  [dates.myDate, dates.today, dates.month],
  storeController.getCarts
);

/* Users */
//Usuarios:
router.get(
  "/store/users",
  [dates.myDate, dates.today, dates.month],
  storeController.getUsers
);

//Obtener los productos filtrados
// router.get("/producto/byname", [myDate, today, month], storeController.getProductByName);

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use(errorHandler.notFound);

module.exports = router;
