const express = require("express");
const router = express.Router();
//requiero la carpeta Controller
const storeController = require("./controller/storeController");
//requiero middleware
const dates = require("./middleware/dates");
const errorHandler = require("./middleware/errorHandler");


router.use("/", [dates.myDate, dates.today, dates.month]);

/* Products & Categories */
router.get("/store/products/categories/expensive", dates.requestDays, storeController.getProductsExpensive);
router.get("/store/products/categories/", dates.requestDays, storeController.getAllProductByCategory);
router.get("/store/products/categories/:categories", dates.requestDays, storeController.getProductByCategory);
router.get("/store/products/prices", dates.requestDays, storeController.getProductPrice);
router.get("/store/products/:id", dates.requestDays, storeController.getProductById);

/* Users */
router.get("/store/users", storeController.getUsers);
router.get("/store/users/firsts", storeController.get3Users);

/* Carts */
//All Carts: http://localhost:3000/store/carts
router.get("/store/carts", storeController.getCarts);
router.get("/store/carts/bigcarts", storeController.getBigCarts);


//Obtener los productos filtrados
// router.get("/producto/byname", [myDate, today, month], storeController.getProductByName);

router.get("/", dates.requestDays, (req, res) => { res.send("Hello World"); });

router.use(errorHandler.notFound);

module.exports = router;

/*
<<< router >>>
Products:
All Products
http://localhost:3000/store/products/prices

Products asc:
http://localhost:3000/store/products/?order=asc
Products desc:
http://localhost:3000/store/products/?order=desc

Product Limit:
http://localhost:3000/store/products/prices?order=3 >> http://localhost:3000/store/products/prices?order=3&order=5

Product By ID
http://localhost:3000/store/products/7

All Products By Categories:
http://localhost:3000/store/products/categories/

Products By Category:
http://localhost:3000/store/products/categories/electronics

*/