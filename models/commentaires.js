const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/Sequelize");

class commentaires extends Model {

}

commentaires.init({
    comment_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    comment : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    task_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },

    user_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    }

},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb gestion_commentaires
    sequelize,
    // Nom du model
    modelName : "commentaires",
    // Nom de la table dans la bdd
    tableName : "commentaires",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Exportation pour utilisation dans d'autres fichiers
module.exports = commentaires;