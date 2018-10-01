import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormModel2 } from './form-model2';
import { CustomValidators } from './validacao/custom-validators';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  pageForm: FormGroup;
  formModel: FormModel2;
  idadeMsgList: any;

  constructor(private fb: FormBuilder, public customValidators: CustomValidators) {
    this.createForm();

    this.idadeMsgList = [];
    this.idadeMsgList.push({key: 'required', msg: 'Campo Obrigatório'});
    this.idadeMsgList.push({key: 'min', msg: 'Idade Mínima 16'});
  }

  ngOnInit() {
  }

  createForm() {
    this.pageForm = this.fb.group({
      nome: ['', Validators.required ],
      endereco : ['', Validators.required ],
      idade: ['', [Validators.required, Validators.min(16)]],
      cep: ['', [Validators.required ], this.customValidators.cep.bind(this.customValidators)]
    });
  }

  public log(a: any ) {
    console.log(a);
  }

  

}
