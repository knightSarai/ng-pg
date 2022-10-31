import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '@ng-pg/api-interfaces';

@Component({
  selector: 'ng-pg-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent {
  email: Email; 

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ email }) => this.email = email);
  }
}
