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
    async addTaches (tache) {
        // Équivalent du insert into (ca_libelle) values ("test catégories");
        return await taches.create(tache);
    }
    async deleteTaches(id) {
        // Équivalent du DELETE FROM taches WHERE id = ?;
        return await taches.destroy({ where: { task_id:id } });
    }
    async updateTaches(id, tache) {
        return await taches.update (tache, { where: { task_id:id } });
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new tachesService();