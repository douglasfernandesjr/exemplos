import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaPaisesService {

  private baseUrl = 'https://restcountries.eu/rest/v2/lang/';
  private baseUrlCont = 'https://restcountries.eu/rest/v2/region/';

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

  public ListarPaisesPorContinente<Tmodel>(continente: string) {
    return this.http.get<Tmodel[]>(this.baseUrlCont + continente);
  }

}
