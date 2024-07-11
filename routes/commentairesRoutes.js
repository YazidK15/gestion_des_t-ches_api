const express = require('express');
const commentairesController = require ('../controllers/commentairesController');
const auth = require('../controllers/auth');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /commentaires
router.get ('/', auth, (request, result) => {commentairesController.getAllCommentaires(request, result)});
router.get ('/:id', (request, result) => {commentairesController.getCommentairesByID(request, result)});
router.post('/', (request, result) => {commentairesController.addCommentaires(request, result)});
router.delete('/:id', (request, result) => { commentairesController.deleteCommentaires(request, result) });
router.patch('/:id', (request, result) => { commentairesController.updateCommentaires(request, result) });

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;