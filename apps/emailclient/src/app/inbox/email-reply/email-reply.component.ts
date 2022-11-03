import { Component, Input, OnChanges } from '@angular/core';
import { Email, CreateEmail } from '@ng-pg/api-interfaces';
import { EmailService } from '../email.service';

@Component({
  selector: 'ng-pg-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss'],
})
export class EmailReplyComponent implements OnChanges {
  showModal = false;
  @Input() email: Email;

  constructor(private emailService: EmailService) {}

  ngOnChanges() {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n----- ${this.email.from} wrote: -----\n> ${text}`,
    }
  }


  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }

  onEmailReply(email: CreateEmail) {
    this.emailService
      .createEmailHttp(email)
      .subscribe(() => this.closeModal());
  }
}
