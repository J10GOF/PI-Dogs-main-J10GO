const { Router } = require('express');
const routerDog = require('./routerDog.js');
const routerTemperaments = require('./routerTemperaments.js');
const routerPostDog = require('./routerPostDog.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", routerDog);
router.use("/temperaments", routerTemperaments);
router.use("/dog", routerPostDog);

module.exports = router;
