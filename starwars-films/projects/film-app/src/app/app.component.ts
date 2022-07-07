import { Component } from '@angular/core';
import { Film } from './models/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Star wars';
  title2 = 'Une histoire Star wars';

  filmAEditer !: Film;

  constructor() {
    //alert('Ah que johny');
  }

  editerFilm(film: Film) {
    this.filmAEditer = film;
  }

  get filmExiste(): boolean {
    return this.filmAEditer !== undefined && this.filmAEditer !== null;
  }
}
