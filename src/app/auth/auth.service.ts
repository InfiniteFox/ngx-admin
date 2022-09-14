import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuth = false;

  constructor() { }

  login(user) {
    if (user.email === 'admin@if.com' && user.password === 'admin_if') {
      this.isAuth = true;
    }
    localStorage.setItem('isUserLoggedIn', this.isAuth ? 'true' : 'false');
    return this.isAuthenticated$().pipe(delay(500));
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  isAuthenticated$() {
    return of(!!localStorage.getItem('isUserLoggedIn'));
  }

  isAuthenticated() {
    return !!localStorage.getItem('isUserLoggedIn');
  }
}
