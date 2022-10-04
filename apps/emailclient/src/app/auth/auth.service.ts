import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@ng-pg/api-interfaces';
import { BehaviorSubject, tap } from 'rxjs';


export interface SignupCredentials {
  email: string;
  password: string;
  username: string;
}

export interface SigninCredentials {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<User>({isAuthanticated: false});

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  changeUserAuth(user:Partial<User>, isAuthanticated: boolean) {
    this.user$.next({
      ...user,
      isAuthanticated
    });
  }

  setUserWithAuth(user: User) {
    this.user$.next({
      ...user,
      isAuthanticated: true
    })
  }

  getUserName(username: string) {
    return this.http.post<{available: true}>('/api/auth/username', {username});
  }

  signin(credintials: SigninCredentials) {
    return this.http
      .post<User>('/api/auth/signin', credintials)
      .pipe(
        tap(user => this.changeUserAuth(user, true)),
        tap(() => this.navigateToHome())
      );

  }

  signup(credintials: SignupCredentials) {
    return this.http
      .post<User>('/api/auth/signup', credintials)
      .pipe(
        tap(user => this.changeUserAuth(user, true)),
        tap(() => this.navigateToHome())
      );
  }

  signout() {
    return this.http
      .post('/api/auth/signout', {})
      .pipe(
        tap(() => this.changeUserAuth({}, false)),
        tap(() => this.router.navigate(['/signin']))
      );
  }

  checkAuth() {
    return this.http
      .get<User>('/api/auth/me')
      .pipe(
        tap(user => this.changeUserAuth(user, true)),
        tap(() => this.navigateToHome())
      );
  }

  navigateToHome() {

    this.router.navigate(['/inbox']);
  }

}
