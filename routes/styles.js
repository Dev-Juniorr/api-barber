const express = require("express");
const route = express.Router();

const {
  getAllS,
  getS,
  postS,
  putS,
  deleteS,
} = require("../controllers/controllerStyles");

route.get("/barber", getAllS);

route.get("/barber/:id", getS);

route.post("/barber", postS);

route.put("/barber/:id", putS);

route.delete("/barber/:id", deleteS);

module.exports = route;