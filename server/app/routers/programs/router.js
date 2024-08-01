// Crée une nouvelle route en utilisant un objet routeur Express.router() : tu peux te baser sur le fichier server/app/routers/api/items/router.js.

const express = require("express");

const router = express.Router();

const { browse } = require("../../controllers/programActions");

router.get("/", browse);




module.exports = router;