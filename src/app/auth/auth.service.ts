import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  isLoggedIn = false;
  accessToken = '';

  constructor(private http: HttpClient) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLoggedIn;
  }

  logIn() {
    this.http
      .post<LoginResponse>('http://localhost:5000/login', {
        username: 'test',
        password: 'test',
      })
      .subscribe((data) => {
        this.accessToken = data.access_token;
      });

    this.isLoggedIn = true;
  }
}
