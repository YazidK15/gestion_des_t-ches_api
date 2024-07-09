const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/Sequelize");

class utilisateurs extends Model {

}

utilisateurs.init({
    user_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    username : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },

    password : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },

    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    }

},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb gestion_taches
    sequelize,
    // Nom du model
    modelName : "utilisateurs",
    // Nom de la table dans la bdd
    tableName : "utilisateurs",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Exportation pour utilisation dans d'autres fichiers
module.exports = utilisateurs;