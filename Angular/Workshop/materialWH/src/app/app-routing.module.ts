import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/main/page-not-found/page-not-found.component';
import { NakedPageLayoutComponent } from 'src/app/core/page-layouts/pages/naked-page-layout/naked-page-layout.component';
import { SideMenuPageLayoutComponent } from 'src/app/core/page-layouts/pages/side-menu-page-layout/side-menu-page-layout.component';
import { HomepageComponent } from 'src/app/main/homepage/homepage.component';
import { PageLayoutsModule } from 'src/app/core/page-layouts/page-layouts.module';
import { MainModule } from 'src/app/main/main.module';

const routes: Routes = [
  {
    path: '',
    component: SideMenuPageLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
    ]
  },
  {
    path: '**',
    component: NakedPageLayoutComponent,
    children: [{ path: '**', component: PageNotFoundComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PageLayoutsModule, MainModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
