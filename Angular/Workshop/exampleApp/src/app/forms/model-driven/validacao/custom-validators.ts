import { PesquisaCEPService } from './pesquisa-cep.service';
import { AbstractControl } from '@angular/forms';
import { catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomValidators {
    constructor(public cepService: PesquisaCEPService) { }
    ///https://www.concretepage.com/angular-2/angular-custom-async-validator-example
    public cep(control: AbstractControl) {
        return this.cepService.buscaCep(control.value).pipe(
            map(() => {of({ 'cep': false });}),
            catchError(
                (e, c) => {
                    return of({ 'cep': true });
                }
            ));
    }
}

