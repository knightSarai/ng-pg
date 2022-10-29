import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailService } from '../email.service';
import { RecievedEmail } from '@ng-pg/api-interfaces';

@Component({
  selector: 'ng-pg-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  recievedEmails$: Observable<RecievedEmail[]>;

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.emailService
      .getEmails()
    this.recievedEmails$ = this.emailService.recievedEmails$;
  }
}
