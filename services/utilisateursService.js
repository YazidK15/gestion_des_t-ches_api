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
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new utilisateursService();