import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.accessToken;

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken),
    });

    return next.handle(authReq);
  }
}
