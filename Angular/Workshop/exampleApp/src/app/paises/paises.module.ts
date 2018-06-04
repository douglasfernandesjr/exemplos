import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PesquisaPaisesService } from 'src/app/paises/pesquisa-paises.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  declarations: [ListaPaisesComponent],
  exports: [ListaPaisesComponent]
})
export class PaisesModule { }
