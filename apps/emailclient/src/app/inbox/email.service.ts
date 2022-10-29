import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecievedEmail } from '@ng-pg/api-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  recievedEmails: BehaviorSubject<RecievedEmail[]> = new BehaviorSubject<RecievedEmail[]>([]);
  recievedEmails$ = this.recievedEmails.asObservable();

  constructor(private http: HttpClient) { }

  getEmailsHttp() {
    return this.http
      .get<RecievedEmail[]>('/api/email')
  }

  getEmails() {
    this.getEmailsHttp()
      .subscribe(emails => this.recievedEmails.next(emails))
  }
}
