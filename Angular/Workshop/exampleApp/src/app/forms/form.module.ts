import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  exports: [TemplateDrivenComponent, ModelDrivenComponent],
  declarations: [TemplateDrivenComponent, ModelDrivenComponent],
})
export class LocalFormModule { }
