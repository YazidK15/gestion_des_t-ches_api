// Importation du models
const taches = require('../models/taches');

// Création de la classe avec le même nom que le fichier
class tachesService {
    // Méthode pour récupérer tous les taches
    async getAllTaches() {
        return await taches.findAll({include :'utilisateurs'});
    }
    // Méthode pour récupérer un utilisateur par son ID
    async getTachesByID(id) {
        return await taches.findByPk(id, {include: 'utilisateurs'});
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new tachesService();