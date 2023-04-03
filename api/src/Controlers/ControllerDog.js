const axios = require('axios');
const { API_KEY } = process.env;
const { Dog, Temperament } = require('../db.js');

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

