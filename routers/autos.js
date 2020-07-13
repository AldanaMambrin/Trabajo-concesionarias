const express = require("express");
const router = express.Router();
const autosControllers = require("../controllers/autosControllers");


//RUTAS
router.get("/",autosControllers);
router.get("/:id",autosControllers);
router.get("/",autosControllers.autos);


module.exports = router; 