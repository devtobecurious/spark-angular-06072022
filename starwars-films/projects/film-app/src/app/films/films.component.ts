import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditionFilmComponent } from '../features/les-films/edition-film/edition-film.component';
import { FilmService } from '../features/les-films/services/film.service';
import { Film } from '../models/film';
import { LoggerService } from '../shared/services/logger.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit, OnDestroy {
  // films: string[] = ['Episode I - The Phantom Menace', 'Episode II - Attack of the Clones', 'Episode III - Revenge of the Sith', 'Episode IV - A New Hope', 'Episode V - The Empire Strikes Back', 'Episode VI - Return of the Jedi'];
  // films: Film[] = [ new Film('Episode I - The Phantom Menace', 1999), ];
  // films : Film[] = [
  //   new Film('Episode I - The Phantom Menace',1999),
  //   new Film('Episode II - Attack of the Clones',2002),
  //   new Film('Episode III - Revenge of the Sith',2005),
  //   new Film('Episode IV - A New Hope',1977),
  //   new Film('Episode V - The Empire Strikes Back',1980),
  //   new Film('Episode VI - Return of the Jedi',1983),
  // ];

  unObjetAuPif = { titre: 'Episode I - The Phantom Menace', annee: 1999 };

  films : Film[] = [
    this.unObjetAuPif,
    new Film('Episode II - Attack of the Clones',2002)
  ];

  @Output() editionUnFilm = new EventEmitter<Film>();

  subscription = new Subscription();

  constructor(private logger: LoggerService,
              private filmsService: FilmService) { }


  ngOnInit(): void {
    var obs= this.filmsService.getAll();

    // obs.subscribe();

    const sub = obs.subscribe(items => {
      
      this.films = items;
    });
    this.subscription.add(sub);
  }

  supprimerFilm(film: Film) {
    this.films = this.films.filter(f => f !== film);
  }

  editerFilm(film: Film) {
    this.logger.log('Edition du film', film);
    this.editionUnFilm.emit(film);
  }

  get filmsPresents(): boolean {
    return this.films.length > 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
