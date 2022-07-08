import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { LesFilmsModule } from './features/les-films/les-films.module';
import { LoggerService } from './shared/services/logger.service';

import {HttpClientModule} from '@angular/common/http';
import { DecouverteObservablesComponent } from './shared/components/decouverte-observables/decouverte-observables.component';
import { ObjetstrouvesModule } from './features/objetstrouves/objetstrouves.module';
import { ContainersModule } from './containers/containers.module';
import { MenuPrincipalComponent } from './shared/ui/menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    DecouverteObservablesComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContainersModule,
    ObjetstrouvesModule
  ],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
