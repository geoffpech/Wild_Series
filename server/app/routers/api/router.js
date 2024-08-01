const express = require("express");

const router = express.Router();

const { sayHello } = require("../../controllers/sayACtions")

router.get("/", sayHello)

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("../programs/router");

router.use("/programs", programsRouter)

/* ************************************************************************* */

module.exports = router;
