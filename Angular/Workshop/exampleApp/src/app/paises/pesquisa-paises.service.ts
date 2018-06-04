import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaPaisesService {
  private baseUrl = 'https://restcountries.eu/rest/v2/lang/';

  constructor(private http: HttpClient) {

   }

  /**
   * ListarPaises
   */
  public ListarPaisesPT() {
    return this.http.get(this.baseUrl + 'pt');
  }

    /**
   * ListarPaises
   */
  public ListarPaises(langCode: string) {
    return this.http.get(this.baseUrl + langCode);
  }
  
  /**
   * ListarPaises
   */
  public ListarPaisesModel<Tmodel>(langCode: string) {
    return this.http.get<Tmodel[]>(this.baseUrl + langCode);
  }
}
