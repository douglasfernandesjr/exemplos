import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public redirectUrl: string;
  constructor() { }

  login(usr: string, pwd: string) {
    this.isLoggedIn = true;
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
