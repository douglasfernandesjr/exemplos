import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginValue = '';
  senhaValue = '';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logIn() {
    if (this.auth.login(this.loginValue, this.senhaValue)) {
      const redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/admin/admin';
      this.router.navigate([redirect]);
    }
  }
}
