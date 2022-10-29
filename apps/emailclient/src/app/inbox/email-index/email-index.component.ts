import { Component, OnInit, Input } from '@angular/core';
import { RecievedEmail } from '@ng-pg/api-interfaces';

@Component({
  selector: 'ng-pg-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss'],
})
export class EmailIndexComponent implements OnInit {
  @Input() emails: RecievedEmail[] | null;
  constructor() {}

  ngOnInit(): void {}
}
