import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ng-pg-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators:[Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.invalid) return;
    
    this.authService.signin(this.authForm.getRawValue())
      .subscribe({
        next: () => {},
        error: (err: HttpErrorResponse) => {
          if (err.error?.message) {
            this.authForm.setErrors({
              netWorkError: {
                message: err.error.message
              }
            });
            return;
          }
          this.authForm.setErrors({
            netWorkError: {
              message: err.message || 'Something went wrong'
            }
          })
        }
      })
  }

  getFormErrorsMessages(): {message: string}[] | null {
    if (this.authForm.errors) {
      const errors = Object
        .values(this.authForm.errors)
        .filter((error)=> {
          if (!error) return false;

          if (error.field) return (
            this.authForm.get(error.field)?.touched &&
            error.message
          )
          
          return error.message;
        });

      return errors
    }
    return null;
  }
}
