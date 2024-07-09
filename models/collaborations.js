const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/Sequelize");
const taches = require('./taches');
const utilisateurs = require('./utilisateurs');

class collaborations extends Model {

}

collaborations.init({
    task_id : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'taches',
            key : 'task_id'
        }
    },

    user_id : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'utilisateurs',
            key : 'user_id'
        }
    }

},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb gestion_taches
    sequelize,
    // Nom du model
    modelName : "collaborations",
    // Nom de la table dans la bdd
    tableName : "collaborations",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Permet d'afficher TOUTES les reservations d'un paiement et tous les paiements d'une réservation
taches.belongsToMany(utilisateurs, {as: 'utilisateurs', foreignKey: 'task_id', through: collaborations})
utilisateurs.belongsToMany(taches, {as: 'taches', foreignKey: 'user_id', through: collaborations})

// Exportation pour utilisation dans d'autres fichiers
module.exports = collaborations;