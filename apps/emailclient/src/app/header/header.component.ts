import { Component, Input, OnInit } from '@angular/core';
import { User } from '@ng-pg/api-interfaces';

@Component({
  selector: 'ng-pg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user: User | null;

  constructor() {}

  ngOnInit(): void {}
}
