import { Injectable } from '@angular/core';
import {  CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, skipWhile, take, map, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): 
     boolean |
     UrlTree |
     Observable<boolean | UrlTree> |
     Promise<boolean | UrlTree> 
  {
      return this.authService.user$.pipe(
        skipWhile(user => user.isAuthanticated === null),
        map(user => user.isAuthanticated || false),
        take(1),
        tap(isAuth => !isAuth && this.router.navigateByUrl('/signin'))
    )
  }
}
