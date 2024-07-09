// Importation 
const tachesService = require ('../services/tachesService');

class tachesController {
    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différentes tâches
    // On mettra toujours ces 2 paramètres
    async getAllTaches(request, result){
        try {
            // Appel à notre service pour récupérer les tâches
            const taches = await tachesService.getAllTaches();
            result.json(taches);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est servenue lors de la récupération des taches"});
        }
    }
    async getTachesByID (request, result) {
        try {
            const taches = await tachesService.getTachesByID(request.params.id);
            result.json(taches);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des taches par ID" });
        }
    }


}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new tachesController();