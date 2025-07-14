/*
 * Title: Router
 * Description:
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 14-07-2025
 */

//Dependencies
//Core Dependencies
//const  =require();

//External Dependencies
const express = require("express");

//Local Dependencies
const controller = require("../controllers/controller");

const router = express.Router();

router.get("/", controller.getRequest);
router.post("/", controller.getRequest);
router.all("*", controller.notFoundRequest);

exports.router = router;
