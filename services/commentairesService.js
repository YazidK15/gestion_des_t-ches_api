// Importation du models
const commentaires = require('../models/commentaires');

// Création de la classe avec le même nom que le fichier
class commentairesService {
    // Méthode pour récupérer tous les commentaires
    async getAllCommentaires() {
        return await commentaires.findAll();
    }
    // Méthode pour récupérer un utilisateur par son ID
    async getCommentairesByID(id) {
        return await commentaires.findByPk(id);
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new commentairesService();