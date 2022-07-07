import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../models/film';
import { LoggerService } from '../shared/services/logger.service';

@Component({
  selector: 'sw-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  // @Input() item !: Film;
  private _item !: Film;

  @Input() set item(value: Film) {
    if (value === undefined) {
      throw new Error('Le film ne peut pas être vide');
    }

    this._item = value;
  }

  get item(): Film {
    return this._item;
  }

  @Output() demanderSuppression = new EventEmitter<Film>();
  @Output() demanderEdition = new EventEmitter<Film>();

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  clickPourSuppression() {
    this.demanderSuppression.emit(this._item);
  }

  clickPourEdition() {
    this.demanderEdition.emit(this._item);
  }
}
