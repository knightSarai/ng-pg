import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ng-pg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() type = 'text';

  constructor() {}

  ngOnInit(): void {}

  showErrors() { 
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
