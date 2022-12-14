import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../../validators/match-password';
import { UniqueUsername } from '../../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ng-pg-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ],
      asyncValidators: [this.uniqueUsername.validate],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    passwordConfirmation: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    })
  }, {
    validators: [this.matchPassword.validate]
  });

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.invalid) return;
    
    this.authService.signup(this.authForm.getRawValue())
      .subscribe({
        next: () => {},
        error: (err: HttpErrorResponse) => {
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
