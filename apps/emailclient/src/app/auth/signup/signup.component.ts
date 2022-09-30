import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../../validators/match-password';

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

  constructor(private matchPassword: MatchPassword) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.authForm)
  }

  showConfirmPasswordError() {
    const control = this.authForm.get('passwordConfirmation');
    if (control) {
      return this.authForm.hasError('passwordsDoNotMatch') && control.touched;
    }
    return false;
  }
}
