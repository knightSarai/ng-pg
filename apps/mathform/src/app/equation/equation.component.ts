import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs'; 

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
  secondsPerSolution: number;
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl(null, [
      Validators.min(0),
    ])
    
  }, [MathValidators.addition('answer', 'a', 'b')]);

  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  get answer() {
    return this.mathForm.value.answer;
  }

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter(value => value === 'VALID'),
        delay(100),
        scan(acc => ({
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }), 
        {numberSolved: 0, startTime: new Date()})
      )
      .subscribe(({numberSolved, startTime}) => {
        this.secondsPerSolution = 
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.reset({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: null
        })
    });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
