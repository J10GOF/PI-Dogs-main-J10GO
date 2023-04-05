const { Router } = require('express');
const routerDog = require('./routerDog.js');
const routerTemperaments = require('./routerTemperaments.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", routerDog);
router.use("/temperaments", routerTemperaments);

module.exports = router;
