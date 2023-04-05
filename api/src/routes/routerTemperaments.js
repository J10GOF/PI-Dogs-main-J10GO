const { Router } = require("express");
const { ApiToDbTemps } = require("../Controlers/ControllerTemperaments.js");
const { Temperament } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => {
	try {
		let AllTempsFromDB = await ApiToDbTemps();
		res.status(200).json(AllTempsFromDB);
	}
	catch (error) {
		console.log(error);
	}
});

router.post("/", async (req, res) => {
	let { name } = req.body;
	try {
		let CrearTemp = await Temperament.findOrCreate({
			where: {
				name: name,
			},
		});
		res.send(CrearTemp);
	}
	catch (error) {
		console.log(error);
	}
});

module.exports = router;