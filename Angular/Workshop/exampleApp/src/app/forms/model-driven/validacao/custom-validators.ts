import { AbstractControl } from '@angular/forms';
import { catchError, tap, map, debounceTime } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomValidators {
    constructor( private http: HttpClient) { }
    // https://www.concretepage.com/angular-2/angular-custom-async-validator-example
    public cep(control: AbstractControl): Observable<{ [key: string]: any } | null> {
        let _cep: string = control.value;

        if (_cep.length < 8) {
            return of({ 'cep': true });
        }

        _cep = _cep.replace('-', '');

        if (_cep.length > 8) {
            return of({ 'cep': true });
        }

        return this.http.get(`https://viacep.com.br/ws/${_cep}/json`).pipe(

            map((resp) => {
                if (resp['erro']) {
                    return { 'cep': true };
                } else {
                   return null;
                }
            }),
            catchError(
                (e, c) => {
                    return of({ 'cep': true });
                }
            ));
    }
}

