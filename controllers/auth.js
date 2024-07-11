// Routes
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require ('dotenv').config();


// Controller 
const login = (req,res) => {
    if(req.body.email == "yazid@example.com" && req.body.password == "azerty")  {
        let token = jwt.sign({userID : 10}, process.env.TOKEN_KEY)
        res.status(200).json({token});
    }else {
        res.status(401).json({message: "Login ou mot de passe incorrect"});
    }
};

// Vérifie si un utilisateur est authentifié 
const test = (req,res) => {
    res.status(200).json({message :"Vous êtes bien authentifié"});
};


// Middleware 

const auth =(req,res,next) => {
    try {
        // On récupère la requete, les entetes, l'entete autorisation de la requete
        // split permet de separer le bearer de la valeur token
        // ca nous donne un tableau avec le 0 = bearer et 1 = token
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_KEY);
        next();  // Si tout est ok, on passe à la prochaine étape de la route
    }catch {
        res.status(401).json({message: "Token non valide"});
        return;
    }
}


router.post('/login', login);
router.get('/test', auth, test);

module.exports = auth;