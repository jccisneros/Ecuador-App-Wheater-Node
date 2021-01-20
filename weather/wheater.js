const colors = require("colors");
const axios = require("axios").default;

module.exports.getWheater = async (latitud, longitud) => {
  var options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      lat: `${latitud}`,
      lon: `${longitud}`,
      units: "metric",
      appid: "ead1c712a7fb10a88d6475d2c424215c",      
    },
  };

  const res = await axios.request(options);
  return res.data;
};