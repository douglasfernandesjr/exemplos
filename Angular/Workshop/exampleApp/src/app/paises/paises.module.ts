import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PesquisaPaisesService } from 'src/app/paises/pesquisa-paises.service';
import { PaisDisplayComponent } from './pais-display/pais-display.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ListaPaisesComponent, PaisDisplayComponent],
  exports: [ListaPaisesComponent]
})
export class PaisesModule { }
