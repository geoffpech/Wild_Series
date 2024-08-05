const express = require("express");

const router = express.Router();

const { sayHello } = require("../../controllers/sayACtions")

router.get("/", sayHello)

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

/* Add these *************************************************************** */

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

/* ************************************************************************* */



const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter = require("../programs/router");

router.use("/programs", programsRouter)

/* ************************************************************************* */

module.exports = router;
