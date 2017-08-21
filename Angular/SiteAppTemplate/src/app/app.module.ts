import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UIRouterModule, UIView} from '@uirouter/angular';
import { HttpModule } from '@angular/http';
import {
  MdCoreModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { HomeComponent } from './pages/home';
import { UserComponent } from './pages/user/user.component';
import { AuthService } from './auth/auth.service';
import { APP_STATES } from './app.router.states';
import { RouterConfiguration } from './app.router.config';

// para fazer um mock do backend
import { MockModule } from './_MOCK/mock.module';


@NgModule({
  exports: [
    MdCoreModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
  ],
  imports: [
    MdCoreModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      otherwise: { state: 'home' },
      config: RouterConfiguration,
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    MockModule // para fazer um mock do backend
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    AuthService
  ],
  bootstrap: [UIView]
})
export class AppModule { }
