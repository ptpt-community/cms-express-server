const express = require("express");
const controller = require("./Controllers/Controller");

const route = express.Router();


route.post('/', controller.create)
route.get('/', controller.read);



module.exports = route;


