const express = require('express');
const collaborationsController = require ('../controllers/collaborationsController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /collaborations
router.get ('/', (request, result) => {collaborationsController.getAllCollaborations(request, result)});

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;