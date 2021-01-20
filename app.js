const { argv } = require("./config/yargs");
const { getLatLong } = require("./place/place");
const { getWheater } = require("./weather/wheater");

const getInfo = async (ciudad) => {
  try {
    const coordenadas = await getLatLong(ciudad);
    const clima = await getWheater(coordenadas.latitud, coordenadas.longitud);
    const info = {
      coordenadas,
      clima
    }    
    return info;
  } catch (error) {
    return `No se pudo determinar el clima de la ciudad de ${ciudad}`.red;
  }
};

getInfo(argv.adress)
  .then((response) => {
    // if (response.name === undefined) {
    //   console.error(
    //     `La dirección ingresada no es valida \nIngrese una ciudad que pertenezca al país de Ecuador`
    //       .red
    //   );
    //   return;
    // }    
    console.log(`============================\n`.green);
    console.log(`Ecuadorian Wheater App\n`.yellow);
    console.log(`${response.clima.name} City`.blue);
    console.log(`${response.coordenadas.region}\n`.blue);
    console.log(`Wheater: ${response.clima.weather[0].main}`.blue);
    console.log(`Wheater Description: ${response.clima.weather[0].description}\n`.blue);
    console.log(`Temperature: ${response.clima.main.temp}°`.blue);
    console.log(`Pressure: ${response.clima.main.pressure}`.blue);
    console.log(`Humity: ${response.clima.main.humidity}\n`.blue);
    console.log(`Latitude: ${response.clima.coord.lat}`.blue);
    console.log(`Longitude: ${response.clima.coord.lon}\n`.blue);
    console.log(`============================`.green);
  })
  .catch((error) => console.error(error));
