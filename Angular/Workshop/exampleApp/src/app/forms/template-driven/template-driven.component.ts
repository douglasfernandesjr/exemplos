import { Component, OnInit } from '@angular/core';
import { FormModel1 } from './form-model1';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  model: FormModel1;

  constructor() {
      this.model = new FormModel1();
  }

  ngOnInit() {
  }

  public log(l: any) { console.log(l); }
}
