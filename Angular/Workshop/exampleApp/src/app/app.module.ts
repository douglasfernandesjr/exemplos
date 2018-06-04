import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoloListComponent } from './bolo/bolo-list/bolo-list.component';
import { PaisesModule } from './paises/paises.module';
import { ListaPaisesComponent } from './paises/lista-paises/lista-paises.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'bolo', component: BoloListComponent },
  { path: 'paises',      component: ListaPaisesComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    BoloListComponent
  ],
  imports: [
    BrowserModule, FormsModule, PaisesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
