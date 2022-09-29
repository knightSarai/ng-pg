import { AbstractControl } from "@angular/forms";

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return ({value}: AbstractControl) => {
      const sum = value[target];
      const firstNumber = value[sourceOne];
      const secondNumber = value[sourceTwo];

      if (firstNumber + secondNumber === parseInt(sum)) {
        return null;
      }

      return {addition: true};

    }
  }
}
