const fs = require ("fs")
const express = require ("express");
const router = express.Router ();
let sucursalesController = require ("../controllers/sucursalesController")
router.get ("/", sucursalesController);


module.exports = router;