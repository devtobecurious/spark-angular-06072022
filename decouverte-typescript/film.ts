interface IFilm {
    titre: string;
}

class Film implements IFilm {
    private _titre = '';
    private annee: number;
    private realisateur: string;

    constructor(titre: string, annee: number, realisateur: string) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    }

    // public getTitre(): string {
    //     return this.titre;
    // }
    public get titre(): string {
        return this._titre;
    }

    public set titre(value: string) {
        // if (value === '' || value === undefined || value === null) {
        if(! value) {
            throw new Error('Le titre ne peut pas être vide');
        }

        this._titre = value;
    }    
}

const film: IFilm = new Film('Le seigneur des anneaux', 2001, 'Tolkien');
film.titre = 'Le seigneur des anneaux !';