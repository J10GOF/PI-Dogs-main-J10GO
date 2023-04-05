const { Router } = require("express");
const { Dog, Temperament } = require("../db.js");
const router = Router();

router.post("/", async (req, res) => {
	try {
		const {
			name, 
			heightMin,
			heightMax,
			weightMin,
			weightMax,
			life_span,
			image,
			temperament,
		} = req.body; // Estos son los datos que me llegan por body
		const crearDog = await Dog.create({
			name,
			heightMin,
			heightMax,
			weightMin,
			weightMax,
			life_span,
			image,
		});
		temperament.map(async (el) => {
			try {
				let temperamentos = await Temperament.findAll({
					where: { name: el },
				});
				await crearDog.addTemperaments(temperamentos);
			}
			catch (error) {
				res.send(error);
			}
		});
		res.status(200).send("El Perro Se Ha Creado Con Exito!!!");
	}
	catch (error) {
		console.log(error);
	}
});

module.exports = router;