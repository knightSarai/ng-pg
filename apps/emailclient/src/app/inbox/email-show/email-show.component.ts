import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email, EmailReply } from '@ng-pg/api-interfaces';
import { EmailService } from '../email.service';

@Component({
  selector: 'ng-pg-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent {
  email: Email; 
  emailReplies: EmailReply[];

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {
    this.route.data
      .subscribe(({ email }) => {
        this.email = email;
        this.getEmailReplies();
      });
  }

  onEmailReply() {
    this.getEmailReplies();
  }

  getEmailReplies() {
    this.emailService
      .getEmailRepliesHttp(this.email.id)
      .subscribe(emailReplies => this.emailReplies = emailReplies);
  }
}
