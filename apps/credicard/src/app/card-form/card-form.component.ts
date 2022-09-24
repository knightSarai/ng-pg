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
  })
  

  ngOnInit(): void {
    this.cardForm.controls
  }
}
