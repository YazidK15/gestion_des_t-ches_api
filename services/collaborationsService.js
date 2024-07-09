// Importation du models
const collaborations = require('../models/collaborations');

// Création de la classe avec le même nom que le fichier
class collaborationsService {
    // Méthode pour récupérer tous les collaborations
    async getAllCollaborations() {
        return await collaborations.findAll();
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new collaborationsService();