import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ProtectedResponse {
  response: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostDetailService {
  constructor(private http: HttpClient) {}

  callProtected() {
    return this.http.get<ProtectedResponse>('http://localhost:5001/protected');
  }
}
