// Importation 
const collaborationsService = require ('../services/collaborationsService');

class collaborationsController {
    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différentes tâches
    // On mettra toujours ces 2 paramètres
    async getAllCollaborations(request, result){
        try {
            // Appel à notre service pour récupérer les tâches
            const collaborations = await collaborationsService.getAllCollaborations();
            result.json(collaborations);
        } catch (error) {
            result.status(500);
            console.log(error);
            result.json({ error: "Une erreur est servenue lors de la récupération des collaborations"});
        }
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new collaborationsController();