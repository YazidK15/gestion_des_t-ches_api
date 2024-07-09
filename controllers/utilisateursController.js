// Importation 
const utilisateursService = require ('../services/utilisateursService');

class utilisateursController {
    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différentes catégories
    // On mettra toujours ces 2 paramètres
    async getAllUtilisateurs(request, result){
        try {
            // Appel à notre service pour récupérer les catégories
            const utilisateurs = await utilisateursService.getAllUtilisateurs();
            result.json(utilisateurs);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est servenue lors de la récupération des utilisateurs"});
        }
    }
    async getUtilisateursByID (request, result) {
        try {
            const utilisateurs = await utilisateursService.getUtilisateursByID(request.params.id);
            result.json(utilisateurs);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des utilisateurs par ID" });
        }
    }
    async addUtilisateurs (request, result) {
        try {
            const utilisateurs = await utilisateursService.addUtilisateurs(request.body);
            result.json(utilisateurs);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de l'ajout de l'utilisateur" });
        }
    }
    async deleteUtilisateurs(request, result) {
        try {
            const utilisateurs = await utilisateursService.deleteUtilisateurs(request.params.id);
            if (utilisateurs > 0) {
                result.json({ message: "Utilisateur supprimé avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Utilisateur non trouvé" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la suppression de l'utilisateur" });
        }
    }
    async updateUtilisateurs(request, result) {
        try {
            const utilisateurs = await utilisateursService.updateUtilisateurs(request.params.id, request.body);
            if (utilisateurs > 0) {
                result.json({ message: "Utilisateur modifié avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Utilisateur non trouvé" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la modification de l'utilisateur" });
        }
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new utilisateursController();