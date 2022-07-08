import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';

@Component({
  selector: 'sw-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css']
})
export class FilmsPageComponent implements OnInit {
  filmAEditer !: Film;

  constructor() { }

  ngOnInit(): void {
  }

  editerFilm(film: Film) {
    this.filmAEditer = film;
  }

  get filmExiste(): boolean {
    return this.filmAEditer !== undefined && this.filmAEditer !== null;
  }
}
