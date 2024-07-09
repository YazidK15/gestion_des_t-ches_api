// Importation du models
const utilisateurs = require('../models/utilisateurs');

// Création de la classe avec le même nom que le fichier
class utilisateursService {
    // Méthode pour récupérer tous les utilisateurs
    async getAllUtilisateurs() {
        return await utilisateurs.findAll({include :'taches'});
    }
    // Méthode pour récupérer un utilisateur par son ID
    async getUtilisateursByID(id) {
        return await utilisateurs.findByPk(id, {include :'taches'});
    }
    async addUtilisateurs (utilisateur) {
        // Équivalent du insert into (ca_libelle) values ("test catégories");
        return await utilisateurs.create(utilisateur);
    }
    async deleteUtilisateurs(id) {
        // Équivalent du DELETE FROM utilisateurs WHERE id = ?;
        return await utilisateurs.destroy({ where: { user_id:id } });
    }
    async updateUtilisateurs(id, utilisateur) {
        return await utilisateurs.update (utilisateur, { where: { user_id:id } });
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new utilisateursService();