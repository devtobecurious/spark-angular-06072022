import { Injectable } from '@angular/core';
import { environment } from 'projects/film-app/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class LoggerService {

  constructor() { }

  log(message: string, ...args: any[]) {
    if (! environment.production) {
      console.log(message, ...args);
    }
  }
}
