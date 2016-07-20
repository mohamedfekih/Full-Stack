var mongoose = require('./db.js').mongoose;
exports.schemaLivre = new mongoose.Schema({
        Id : Number,
        Nom: { type: String, maxlength: 50 },
        Auteur: String,
        Description: String,
        Langue: String,
        Prix: Number,
        ISBN: String,
        MaisonEdition: String,
        NombrePages: Number,
        Poids: String,
        Disponibilité: Boolean,
        DateSortie:String,
        UrlImage: String,
        Categorie: String,
        Quantite: Number,
        DateDerniereCommande: { type: Date, default: Date.now }
    }
);
exports.schemaCategorie = new mongoose.Schema({
        Id : String,
        Libelle: String,
    }
)