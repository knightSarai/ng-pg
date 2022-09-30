import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { AsyncValidator, AbstractControl } from "@angular/forms";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

interface AuthError {
  statusCode: number;
  message: string;
  error: string;
}

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {
    this.validate = this.validate.bind(this);
  }

  validate(control: AbstractControl) {
    const { value } = control;

    return this.authService.getUserName(value).pipe(
      map(() => null),
      catchError((error: AuthError) => {
        if (error.statusCode === 422) {
          return of({ unique: true })
        }
        return of({ noConnection: true })
      })
    )
  }

}
