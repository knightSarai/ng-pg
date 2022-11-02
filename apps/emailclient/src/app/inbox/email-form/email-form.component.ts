import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailForm } from '@ng-pg/api-interfaces';

@Component({
  selector: 'ng-pg-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: EmailForm;
  emailForm: FormGroup<{
    to: FormControl<string>;
    from: FormControl<string>;
    subject: FormControl<string>;
    text: FormControl<string>;
  }>;

  constructor() {}

  ngOnInit() {
    const { from, to, subject, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.email,
        ],
      }),
      from: new FormControl(
        {
          value: from,
          disabled: true,
        },
        {
        nonNullable: true,
      }),
      subject: new FormControl(subject, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      text: new FormControl(text, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    })
  }
  
  onSubmit() {
    if (this.emailForm.invalid) return;
    console.log(this.emailForm.value);
  }
}
