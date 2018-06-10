import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaCEPService {

  constructor(private http: HttpClient) { }

  buscaCep(cep: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
  }
}
