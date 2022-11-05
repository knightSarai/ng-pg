import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ng-pg-bootstrap-input',
  templateUrl: './bootstrap-input.component.html',
  styleUrls: ['./bootstrap-input.component.scss'],
})
export class BootstrapInputComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() type = 'text';
  @Input() rows = '5';

  showErrors() { 
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
