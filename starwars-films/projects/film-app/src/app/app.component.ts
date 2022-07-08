import { Component } from '@angular/core';
import { Film } from './models/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Star wars';
  title2 = 'Une histoire Star wars';

  constructor() {
    //alert('Ah que johny');
  }


}
