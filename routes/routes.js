const express = require("express");
const authControllers = require("../controllers/auth_controller");
const cartAndFavuritesProductController = require("../controllers/cart_and_favourites_controller");
const productController = require("../controllers/product_controller");
const middlewares = require("../middlewares");
const router = express.Router();

// sample
router.get("/sample", (req, res) => {
  const headers = req.headers;
  console.log(headers.authorization, "headers");
  res.json({
    message: "SAMPLE",
  });
});

// auth
router.post("/signup", authControllers.signup);
router.post("/login", authControllers.login);

// product
router.post("/newproduct", productController.postProduct);
router.get("/products", productController.getProduct);

// cart
router.post("/addtocart", cartAndFavuritesProductController.postCartProduct);
router.get(
  "/getcartproducts:uid",
  cartAndFavuritesProductController.getCartProduct
);
// favourites
router.post(
  "/addtofavourites",
  cartAndFavuritesProductController.postFavouritesProduct
);
router.get(
  "/getfavouritesproducts:uid",
  cartAndFavuritesProductController.getFavouritesProduct
);

// post
router.post("/post", middlewares.authMiddleware, (req, res) => {
  res.json({
    message: "create post",
  });
});

module.exports = router;
