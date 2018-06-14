import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NakedPageLayoutComponent } from './pages/naked-page-layout/naked-page-layout.component';
import { SideMenuPageLayoutComponent } from './pages/side-menu-page-layout/side-menu-page-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  declarations: [NakedPageLayoutComponent, SideMenuPageLayoutComponent],
  exports: [NakedPageLayoutComponent, SideMenuPageLayoutComponent]
})
export class PageLayoutsModule { }
