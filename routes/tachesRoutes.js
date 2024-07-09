const express = require('express');
const tachesController = require ('../controllers/tachesController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /taches
router.get ('/', (request, result) => {tachesController.getAllTaches(request, result)});
router.get ('/:id', (request, result) => {tachesController.getTachesByID(request, result)});

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;