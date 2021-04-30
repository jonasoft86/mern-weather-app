const express = require("express");
const router = express.Router();

const {
  getWatherData,
} = require("../controllers/WeatherControllers");

router.get("/", getWatherData);

module.exports = router;