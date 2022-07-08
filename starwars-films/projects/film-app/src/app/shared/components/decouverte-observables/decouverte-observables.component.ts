import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-decouverte-observables',
  templateUrl: './decouverte-observables.component.html',
  styleUrls: ['./decouverte-observables.component.css']
})
export class DecouverteObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.info('00 -- DEMARRAGE ngOnInit()');

    const aExecuterP = (resolve: any, reject: any) => {
      console.info('SSS - Promise créée');
      setTimeout(() => {
        console.info('AAA - Promise créée');
      }, 0);

      resolve('Résultat de la Promise');
    };
    const prom = new Promise(aExecuterP).then((resultatDuResolve) => {
      console.info('PPP - Promise résolue', resultatDuResolve);
    });


    // const aExecuterO = (subscriber: any) => {
    //   console.info('SSS - Observable créée');

    //   setTimeout(() => {
    //     console.info('AAA - Observable créée');
    //   }, 1000);
    // };
    // const obs0 = new Observable(aExecuterO);

    const obs = new Observable(subscriber => {
      console.info('SSS - Observable créée');

      // setTimeout(() => {
      //   console.info('AAA - Observable créée');
      // }, 0);

      for(let i = 0; i < 3; i++) {
        subscriber.next(i);
      }

      // subscriber.error('Erreur');

      subscriber.complete();

      subscriber.next(100);
    });

    obs.subscribe();

    obs.subscribe(
    resultat => {
      console.info('PPP - Observable résolue', resultat);
    },
    (error) => {},
    () => { console.info('Hey cest fini !')});



    console.info('100 -- FIN ngOnInit()');
  }

}
