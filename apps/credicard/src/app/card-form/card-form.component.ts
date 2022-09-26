import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'ng-pg-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  cardForm= new FormGroup({
    name: new FormControl('', {
      nonNullable:true,
      validators: [Validators.required, Validators.minLength(3)] 
    }),
    number: new FormControl('', {
      nonNullable:true,
      validators: [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ] 
    }),
    expiration: new FormControl('', {
      nonNullable:true,
      validators: [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
      ] 
    }),
    securityCode: new FormControl('', {
      nonNullable:true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ] 
    }),
  })
  

  ngOnInit(): void {
    this.cardForm.controls
  }

  onSubmit() {
    console.log(this.cardForm.value);
  }
}
