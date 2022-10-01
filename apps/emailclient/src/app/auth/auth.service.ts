import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ng-pg/api-interfaces';
import { BehaviorSubject, tap } from 'rxjs';


export interface SignupCredentials {
  email: string;
  password: string;
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<User>({isAuthanticated: false});

  constructor(private http: HttpClient) { }

  setUserWithAuth(user: User) {
    this.user$.next({
      ...user,
      isAuthanticated: true
    })
  }

  getUserName(username: string) {
    return this.http.post<{available: true}>('/api/auth/username', {username});
  }

  signup(credintials: SignupCredentials) {
    return this.http
      .post<User>('/api/auth/signup', credintials)
      .pipe(tap(user => this.setUserWithAuth(user)));
  }

  checkAuth() {
    return this.http
      .get<User>('/api/auth/me')
      .pipe(tap(user => this.setUserWithAuth(user)));
  }

}
