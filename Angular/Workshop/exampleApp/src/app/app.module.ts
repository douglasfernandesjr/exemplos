import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoloListComponent } from './bolo/bolo-list/bolo-list.component';
import { PaisesModule } from './paises/paises.module';
import { ListaPaisesComponent } from './paises/lista-paises/lista-paises.component';
import { RouterModule, Routes } from '@angular/router';
import { PagLayoutComponent } from './layout/pag-layout/pag-layout.component';

const appRoutes: Routes = [{
  path: '',
  component: PagLayoutComponent,
  children: [
    { path: 'bolo', component: BoloListComponent },
    { path: 'paises', component: ListaPaisesComponent },
  ]
}];

@NgModule({
  declarations: [
    AppComponent,
    BoloListComponent,
    PagLayoutComponent
  ],
  imports: [
    BrowserModule, FormsModule, PaisesModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
