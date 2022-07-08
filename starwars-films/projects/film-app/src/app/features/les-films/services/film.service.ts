import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/film-app/src/environments/environment';
import { map, Observable } from 'rxjs';
import { Film } from '../../../models/film';

type RetourApi = {
  count: number,
  results: [{
    title: string,
    release_date: string
  }]
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Film[]> {
    return this.httpClient.get<RetourApi>(environment.apis.urls.films).pipe(
      map(retourApi => {
        const listFilms: Film[] = [];

        retourApi.results.forEach(apifilm => {
          let film: Film;

          const date = new Date(apifilm.release_date);
          film = new Film(apifilm.title, date.getFullYear());

          listFilms.push(film);

          return film;
        });

        return listFilms;
      }));
  }
}
