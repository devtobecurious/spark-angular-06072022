import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { LesFilmsModule } from './features/les-films/les-films.module';
import { LoggerService } from './shared/services/logger.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LesFilmsModule
  ],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
