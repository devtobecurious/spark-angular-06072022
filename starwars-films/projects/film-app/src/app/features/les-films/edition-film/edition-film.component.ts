import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../../models/film';

@Component({
  selector: 'sw-edition-film',
  templateUrl: './edition-film.component.html',
  styleUrls: ['./edition-film.component.css']
})
export class EditionFilmComponent implements OnInit {
  @Input() item !: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
