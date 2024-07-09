// Importer des fichiers
const Sequelize = require('sequelize'); 
const config = require('./config.json')

// Créer la connexion à notre bdd (Équivalent à PDO en PHP)
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host : config.host,
    dialect : "mysql",
    port : config.port
})

// Pourvoir exporter notre fichier pour l'utiliser partout
module.exports = sequelize;
