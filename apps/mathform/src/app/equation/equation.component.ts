import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter } from 'rxjs'; 

export interface additionParams {
  a: number;
  b: number;
  answer: string;
}

@Component({
  selector: 'ng-pg-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss'],
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
    
  }, [MathValidators.addition('answer', 'a', 'b')]);

  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter(value => value === 'VALID'),
        delay(100)
      )
      .subscribe(() => {
        this.mathForm.reset({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        })
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
