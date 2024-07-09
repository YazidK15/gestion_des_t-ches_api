const express = require('express');
const utilisateursController = require ('../controllers/utilisateursController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /utilisateurs
router.get ('/', (request, result) => {utilisateursController.getAllUtilisateurs(request, result)});
router.get ('/:id', (request, result) => {utilisateursController.getUtilisateursByID(request, result)});
router.post('/', (request, result) => {utilisateursController.addUtilisateurs(request, result)});
router.delete('/:id', (request, result) => { utilisateursController.deleteUtilisateurs(request, result) });
router.patch('/:id', (request, result) => { utilisateursController.updateUtilisateurs(request, result) });


// Exportation pour utilisation dans d'autres fichiers
module.exports = router;