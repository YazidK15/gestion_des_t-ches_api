const express = require('express');
const utilisateursRoutes = require ('./routes/utilisateursRoutes');
const tachesRoutes = require ('./routes/tachesRoutes');
const collaborationsRoutes = require ('./routes/collaborationsRoutes');
const commentairesRoutes = require ('./routes/commentairesRoutes');
const authRoutes = require ('./controllers/auth');

const app = express();
const port = 3001;

// Précise que notre API va fonctionner avec du JSON
app.use(express.json());

app.use ('/utilisateurs', utilisateursRoutes);
app.use ('/taches', tachesRoutes);
app.use ('/collaborations', collaborationsRoutes);
app.use ('/commentaires', commentairesRoutes);
app.use ('/', authRoutes);

// Premier paramètre le port sur lequel le serveur va écouter
// Deuxieme paramètre une fonction flechée qui est faites au lancement du serveur
app.listen(port, ()=>{
    console.log("Votre serveur est lancé sur http://127.0.0.1:"+port);
})