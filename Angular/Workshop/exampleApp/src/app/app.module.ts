import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoloListComponent } from './bolo/bolo-list/bolo-list.component';
import { PaisesModule } from './paises/paises.module';

@NgModule({
  declarations: [
    AppComponent,
    BoloListComponent
  ],
  imports: [
    BrowserModule, FormsModule, PaisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
