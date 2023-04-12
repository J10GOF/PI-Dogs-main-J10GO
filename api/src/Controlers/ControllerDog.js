const axios = require('axios');
const { API_KEY } = process.env;
const { Dog, Temperament } = require('../db.js');

//Pido la info a la API
const getApiInfo = async function () {
	const urlAPI = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
	const infoAPI = await urlAPI.data.map((el) => {
		const heightAPI = el.height.metric.split("-");
		const weightAPI = el.weight.metric.split("-");
		return {
			id: `${el.id}`,
			name: el.name,
			heightMin: parseInt(heightAPI[0]) ? parseInt(heightAPI[0]) : 27,
			heightMax: parseInt(heightAPI[1]) ? parseInt(heightAPI[1]) : 41,
			weightMin: parseInt(weightAPI[0]) ? parseInt(weightAPI[0]) : 25,
			weightMax: parseInt(weightAPI[1]) ? parseInt(weightAPI[1]) : 36,
			life_span: el.life_span,
			image: el.image.url ? el.image.url : "https://static.vecteezy.com/system/resources/previews/011/480/580/original/a-labrador-or-golden-retriever-dog-with-a-question-mark-dog-question-an-uncomprehending-dog-with-its-head-tilted-pet-illustration-vector.jpg",
			temperament : el.temperament,
		};
	});
	return infoAPI;
};

//Buscar en DB
const getDBInfo = async function () {
	return await Dog.findAll({
		include: {
			model: Temperament,
		},
	});
};

//Combino la información obtenida la API y de la DB para obtener información completa sobre una lista de razas de perros
const getAllInfo = async function () {
  const apiInfoAll = await getApiInfo();
  let dbInfoAll = await getDBInfo();
  dbInfoAll = await dbInfoAll.map((el) => {
    return {
      id: el.id,
      name: el.name,
      heightMin: el.heightMin,
      heightMax: el.heightMax,
      weightMin: el.weightMin,
      weightMax: el.weightMax,
      life_span: el.life_span,
      image: el.image,
      temperament: el.temperaments
        .map((el) => {
          return el.name;
        })
        .join(", "),
    };
  });
	const allInfo = apiInfoAll.concat(dbInfoAll);
	return allInfo;
};

module.exports = {
	getAllInfo,
	getDBInfo,
};