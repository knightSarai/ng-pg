import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface SignupCredentials {
  email: string;
  password: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserName(username: string) {
    return this.http.post<{available: true}>('/api/auth/username', {username});
  }

  signup(credintials: SignupCredentials) {
    return this.http.post('/api/auth/signup', credintials);
  }

}
