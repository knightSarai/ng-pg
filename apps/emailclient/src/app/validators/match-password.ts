import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    const { password, passwordConfirmation } = control.value;

    if (password === passwordConfirmation) {
      return null;
    }

    return { 
      passwordsDoNotMatch: {
        message: 'Passwords do not match',
        field: 'passwordConfirmation',
      } 
    };
  }
}
