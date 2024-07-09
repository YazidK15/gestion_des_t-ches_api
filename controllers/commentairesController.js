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
    async addCommentaires (request, result) {
        try {
            const commentaires = await commentairesService.addCommentaires(request.body);
            result.json(commentaires);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de l'ajout du commentaire" });
        }
    }
    async deleteCommentaires(request, result) {
        try {
            const commentaires = await commentairesService.deleteCommentaires(request.params.id);
            if (commentaires > 0) {
                result.json({ message: "Commentaire supprimé avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Commentaire non trouvé" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la suppression du commentaire" });
        }
    }
    async updateCommentaires(request, result) {
        try {
            const commentaires = await commentairesService.updateCommentaires(request.params.id, request.body);
            if (commentaires > 0) {
                result.json({ message: "Commentaire modifié avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Commentaire non trouvé" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la modification du commentaire" });
        }
    }


}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new commentairesController();