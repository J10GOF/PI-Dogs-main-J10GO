const { Router } = require("express");
const { getAllInfo } = require("../Controlers/ControllerDog.js");

const router = Router();

router.get("/", async (req, res) => {
	try {
		const { name } = req.query;
		const info = await getAllInfo();
		if (name) {
			let dogBreed = await info.filter((el) =>
				el.name.toLowerCase().includes(name.toLowerCase())
				);
			if (dogBreed.length !== 0) {
				res.status(200).send(dogBreed);
			}else{
				res.status(404).send('Esa raza no existe');
			}
		}else{
			res.status(200).send(info);
		}
	}
	catch (error) {
		console.log(error);
	}
});