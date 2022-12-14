import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEmail, Email, RecievedEmail } from '@ng-pg/api-interfaces';
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

  getEmailHttp(id: string) {
    return this.http
      .get<Email>(`/api/email/${id}`)
  }

  getEmails() {
    this.getEmailsHttp()
      .subscribe(emails => this.recievedEmails.next(emails))
  }

  createEmailHttp(email: CreateEmail) {
    return this.http
      .post<Email>('/api/email', email)
  }

}
