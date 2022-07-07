import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../../../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Film[]> {
    return this.httpClient.get<Film[]>('https://swapi.dev/api/films');
  }
}
