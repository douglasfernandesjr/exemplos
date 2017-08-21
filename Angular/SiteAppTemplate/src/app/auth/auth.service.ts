import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthUser } from './auth.user.model';


export const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay));
/**
 * This service emulates an Authentication Service.
 */
@Injectable()
export class AuthService {

  constructor(private http: Http) {
    // set token if saved in local storage
    if (localStorage.getItem('currentUser')) {
      var currentUser: AuthUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
        this.setToken(currentUser);
      }
    }
  }

  _authenticate: boolean = false;
  _user: AuthUser;

  private setToken(user: AuthUser) {
    this._user = user;
    this._authenticate = true;

    localStorage.setItem('currentUser', JSON.stringify(user));
  }



  authenticate(username, password): Observable<boolean> {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          this.setToken({ token: token });
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  isAuthenticated() {
    return this._authenticate;
  }

  logOut(): void {
    // clear token remove user from local storage to log user out
    this._user = null;
    this._authenticate = false;
    localStorage.removeItem('currentUser');
}
}

