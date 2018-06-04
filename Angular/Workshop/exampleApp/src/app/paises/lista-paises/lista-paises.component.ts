import { Component, OnInit } from '@angular/core';
import { PesquisaPaisesService } from '../pesquisa-paises.service';
import { Pais } from 'src/app/paises/pais';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  lista: string[];
  lang: string;
  constructor( private request: PesquisaPaisesService) {
    this.lista = [];
    this.lang = 'pt';
   }

  ngOnInit() {
    // this.request.ListarPaisesPT().subscribe( (data) => {
    //   for (let i in data) {
    //    this.lista.push(data[i].name);
    //   }
    //  } );

    this.updateLista();
  }

  public updateLista() {
    this.lista = [];
    this.request.ListarPaisesModel<Pais>(this.lang).subscribe( (data) => {
      data.forEach((item) => {   this.lista.push(item.name); } );
     } );
  }

}
