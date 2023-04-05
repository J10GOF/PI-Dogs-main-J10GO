const axios = require("axios");
const { Temperament } = require("../db.js");
const { API_KEY } = process.env;

const ApiToDbTemps = async function () {
	let AllDataFromApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
	let tempsFromAPI = await AllDataFromApi.data.map((el) => ` ${el.temperament}`);
	tempsFromAPI = tempsFromAPI.join().split(",").sort();
	tempsFromAPI = [...new Set(tempsFromAPI)];
	const formatTemperaments = tempsFromAPI.map((e) => e.trim()).filter((e) => e !== "undefined");
	//recorro la matriz de temperamentos formateados
	for (let i = 0; i < formatTemperaments.length; i++) {
    const e = formatTemperaments[i];
    await Temperament.findOrCreate({
      where: { name: e },
    });
  }
  let allTemperaments = await Temperament.findAll();
  return allTemperaments;
  //Retorno los temperamentos a la base de datos
};

module.exports = {
	ApiToDbTemps,
};