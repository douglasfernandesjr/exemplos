import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomepageComponent, PageNotFoundComponent],
  exports: [HomepageComponent, PageNotFoundComponent]
})
export class MainModule { }
