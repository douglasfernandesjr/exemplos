import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormModel2 } from './form-model2';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  pageForm: FormGroup;
  formModel: FormModel2;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.pageForm = this.fb.group({
      nome: ['', Validators.required ],
      endereco : ['', Validators.required ],
      idade: ['',[ Validators.required, Validators.min(16)]],
    });
  }

}
