import { Component, OnInit } from '@angular/core';
import { PesquisaPaisesService } from '../pesquisa-paises.service';
import { Pais } from 'src/app/paises/pais';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, map, distinctUntilChanged, switchMap, filter, catchError, tap, timeout, flatMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css'],
})
export class ListaPaisesComponent implements OnInit {
  lista: string[];
  lang: string;
  items: Array<Pais>;
  term = new FormControl();
  semResultado = false;
  constructor(private request: PesquisaPaisesService) {
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

    this.term.valueChanges
      .pipe(
        filter(term => term.length > 3),
        debounceTime(400),
        distinctUntilChanged(),
        mergeMap(
          (term) => {
            return this.request.ListarPaisesPorContinente<Pais>(term)
              .pipe(
                catchError((e, c) => {
                  this.semResultado = true;
                  return [];
                  })
              );
          }
        ),
    ).subscribe(paises =>  { this.semResultado = false; this.items = paises; });

    // https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
    // https://blog.angularindepth.com/switchmap-bugs-b6de69155524


  }

  public updateLista() {
    this.lista = [];
    this.request.ListarPaisesModel<Pais>(this.lang).subscribe((data) => {
      data.forEach((item) => { this.lista.push(item.name); });
    });
  }

  public eventoCallback(event) {
    console.log('Evento de Call Back');
  }
  // https://medium.com/@danilodev.silva/angular-5-eventemitter-aprendendo-a-usar-input-e-output-property-56df9158de6b
}
