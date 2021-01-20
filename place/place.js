const axios = require("axios").default;
const colors = require("colors");

module.exports.getLatLong = async (adress) => {
  var options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: { limit: "1", countryIds: "EC", namePrefix: `${adress}` },
    headers: {
      "x-rapidapi-key": "APIKEY",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const resp = await axios.request(options);
  const data = resp.data.data[0];

  const name = data.name;
  const region = data.region;
  const latitud = data.latitude;
  const longitud = data.longitude;

  return {
    name,
    region,
    latitud,
    longitud,
  };
};
