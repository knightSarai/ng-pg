import { Component, Input, OnInit } from '@angular/core';
import { CreateEmail } from '@ng-pg/api-interfaces';

@Component({
  selector: 'ng-pg-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
})
export class EmailCreateComponent implements OnInit {
  @Input() from = '';

  showModal = false;
  email: CreateEmail = {
    from: '',
    to: '',
    subject: '',
    text: '',
  }

  constructor() {}

  ngOnInit(): void {
    this.email.from = this.from;
  }

  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }
}
