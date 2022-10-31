import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Email } from '@ng-pg/api-interfaces';
import { catchError, EMPTY } from 'rxjs';
import { EmailService } from '../email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<Email> {
  constructor(
    private emailSerivce: EmailService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.emailSerivce
      .getEmailHttp(id)
      .pipe(
        catchError(() => {
          this.router.navigate(['/inbox/not-found'], { state: { message: 'Email not found' } });
          return EMPTY
        })
      );
  }
}
