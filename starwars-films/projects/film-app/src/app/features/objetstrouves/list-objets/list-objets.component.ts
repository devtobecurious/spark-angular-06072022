import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-list-objets',
  templateUrl: './list-objets.component.html',
  styleUrls: ['./list-objets.component.css']
})
export class ListObjetsComponent implements OnInit {
  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
