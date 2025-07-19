/*
 * Title: Main app
 * Description:
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 13-07-2025
 */
//Dependencies
//Core Dependencies

//External Dependencies
const express = require("express");

//Local Dependencies
const { router } = require("./routes/router");
const controllers = require("./controllers/controller");

const app = express();

app.use("/", router);
app.use(controllers.notFoundRequest);

exports.app = app;
