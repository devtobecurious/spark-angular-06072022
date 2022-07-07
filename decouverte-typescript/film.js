"use strict";
var Film = /** @class */ (function () {
    function Film(titre, annee, realisateur) {
        this._titre = '';
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    }
    Object.defineProperty(Film.prototype, "titre", {
        // public getTitre(): string {
        //     return this.titre;
        // }
        get: function () {
            return this._titre;
        },
        set: function (value) {
            // if (value === '' || value === undefined || value === null) {
            if (!value) {
                throw new Error('Le titre ne peut pas être vide');
            }
            this._titre = value;
        },
        enumerable: false,
        configurable: true
    });
    return Film;
}());
var film = new Film('Le seigneur des anneaux', 2001, 'Tolkien');
film.titre = 'Le seigneur des anneaux !';
