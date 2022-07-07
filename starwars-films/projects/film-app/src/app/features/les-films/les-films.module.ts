import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionFilmComponent } from './edition-film/edition-film.component';



@NgModule({
  declarations: [
    EditionFilmComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EditionFilmComponent
  ]
})
export class LesFilmsModule { }
