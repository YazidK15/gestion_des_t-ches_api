const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/Sequelize");

class taches extends Model {

}

taches.init({
    task_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    title : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    description : {
        type : DataTypes.STRING,
        allowNull : true,
    },

    due_date : {
        type : DataTypes.DATE,
        allowNull : true,
    },

    owner_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    
    }

},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb gestion_taches
    sequelize,
    // Nom du model
    modelName : "taches",
    // Nom de la table dans la bdd
    tableName : "taches",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Exportation pour utilisation dans d'autres fichiers
module.exports = taches;