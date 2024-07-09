const express = require('express');
const commentairesController = require ('../controllers/commentairesController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /commentaires
router.get ('/', (request, result) => {commentairesController.getAllCommentaires(request, result)});
router.get ('/:id', (request, result) => {commentairesController.getCommentairesByID(request, result)});

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;