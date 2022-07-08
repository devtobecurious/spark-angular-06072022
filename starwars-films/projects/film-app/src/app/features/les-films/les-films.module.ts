import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionFilmComponent } from './edition-film/edition-film.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditionFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EditionFilmComponent
  ]
})
export class LesFilmsModule { }
