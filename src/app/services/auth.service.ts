import { Injectable } from '@angular/core';
import { Credenciais } from '../models/Credenciais';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais){
    return this.http.post(`${API_CONFIG.baseUrl}/contausuario`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  sucessfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }
}
