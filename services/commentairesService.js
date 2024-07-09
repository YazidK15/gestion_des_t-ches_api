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
    async addCommentaires (commentaire) {
        // Équivalent du insert into (ca_libelle) values ("test catégories");
        return await commentaires.create(commentaire);
    }
    async deleteCommentaires(id) {
        // Équivalent du DELETE FROM commentaires WHERE id = ?;
        return await commentaires.destroy({ where: { comment_id:id } });
    }
    async updateCommentaires(id, commentaire) {
        return await commentaires.update (commentaire, { where: { comment_id:id } });
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new commentairesService();