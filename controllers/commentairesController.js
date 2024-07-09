// Importation 
const commentairesService = require ('../services/commentairesService');

class commentairesController {
    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différentes catégories
    // On mettra toujours ces 2 paramètres
    async getAllCommentaires(request, result){
        try {
            // Appel à notre service pour récupérer les catégories
            const commentaires = await commentairesService.getAllCommentaires();
            result.json(commentaires);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est servenue lors de la récupération des commentaires"});
        }
    }
    async getCommentairesByID (request, result) {
        try {
            const commentaires = await commentairesService.getCommentairesByID(request.params.id);
            result.json(commentaires);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des commentaires par ID" });
        }
    }


}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new commentairesController();