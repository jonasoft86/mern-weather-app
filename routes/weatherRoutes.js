const { Router } = require('express');
const router = Router();

const { getWatherData } = require("../controllers/WeatherControllers");

router.route('/')
    .get(getWatherData)

router.route('/:city')
    .get(getWatherData)

module.exports = router;