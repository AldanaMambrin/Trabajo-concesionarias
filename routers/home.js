const fs = require ("fs")
const express = require ("express");
const router = express.Router ();
let homeController = require ("../controllers/homeController")
router.get ("/", homeController.home );


module.exports = router;