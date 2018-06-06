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
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';

const appRoutes: Routes = [{
  path: '',
  component: PagLayoutComponent,
  children: [
    { path: 'bolo', component: BoloListComponent },
    { path: 'paises', component: ListaPaisesComponent },
    { path: 'template', component: TemplateDrivenComponent },
  ]
}];

@NgModule({
  declarations: [
    AppComponent,
    BoloListComponent,
    PagLayoutComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule, FormsModule, PaisesModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
