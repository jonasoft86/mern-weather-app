require("dotenv").config({ path: "./config.env" });
const fetch = require('node-fetch');

//Obtener datos desde API
const getWatherData = async (req, res) => {
  try {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Santiago&appid=`+process.env.API_KEY)
      .then(respuesta => respuesta.json())

    res.json(response)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getWatherData
};