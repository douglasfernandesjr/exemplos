import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bolo-list',
  templateUrl: './bolo-list.component.html',
  styleUrls: ['./bolo-list.component.css']
})
export class BoloListComponent implements OnInit {

  lista: string[];
  showOne: Boolean;

  constructor() {
    this.showOne = false;
   }

  ngOnInit() {
    this.lista =  ['Cenoura', 'Leite Ninho', 'Chocolate'];
   }

}
