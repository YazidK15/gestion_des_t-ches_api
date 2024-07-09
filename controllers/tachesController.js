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
    async addTaches (request, result) {
        try {
            const taches = await tachesService.addTaches(request.body);
            result.json(taches);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de l'ajout de la tâche" });
        }
    }
    async deleteTaches(request, result) {
        try {
            const taches = await tachesService.deleteTaches(request.params.id);
            if (taches > 0) {
                result.json({ message: "Tâche supprimée avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Tâche non trouvée" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la suppression de la tâche" });
        }
    }
    async updateTaches(request, result) {
        try {
            const taches = await tachesService.updateTaches(request.params.id, request.body);
            if (taches > 0) {
                result.json({ message: "Tâche modifiée avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Tâche non trouvée" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la modification de la tâche" });
        }
    }


}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new tachesController();