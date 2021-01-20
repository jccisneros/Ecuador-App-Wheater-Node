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
      appid: "APIKEY",      
    },
  };

  const res = await axios.request(options);
  return res.data;
};
