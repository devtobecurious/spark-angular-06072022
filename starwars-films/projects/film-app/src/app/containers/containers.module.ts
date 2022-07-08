import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsPageComponent } from './films-page/films-page.component';
import { LesFilmsModule } from '../features/les-films/les-films.module';
import { FilmsComponent } from '../films/films.component';
import { FilmComponent } from '../film/film.component';



@NgModule({
  declarations: [
    FilmsPageComponent,
    FilmsComponent,
    FilmComponent,
  ],
  imports: [
    CommonModule,
    LesFilmsModule
  ],
  exports: [
    FilmsPageComponent
  ]
})
export class ContainersModule { }
