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


}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new utilisateursController();