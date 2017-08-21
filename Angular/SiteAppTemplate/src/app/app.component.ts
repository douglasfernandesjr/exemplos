import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Site de exemplo';
  isAuthenticated;

  constructor( public authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated();
  }
}
