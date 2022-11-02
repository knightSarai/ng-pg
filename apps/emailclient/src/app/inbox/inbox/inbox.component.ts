import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmailService } from '../email.service';
import { RecievedEmail, User } from '@ng-pg/api-interfaces';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ng-pg-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  recievedEmails$: Observable<RecievedEmail[]>;
  user$: BehaviorSubject<User>;

  constructor(
    private emailService: EmailService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.emailService.getEmails()
    this.recievedEmails$ = this.emailService.recievedEmails$;
    this.user$ = this.authService.user$;
  }
}
