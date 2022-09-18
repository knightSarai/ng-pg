import { Component, Input, OnInit } from '@angular/core';
import { WikipediaPage } from '../app.component';

@Component({
  selector: 'ng-pg-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit {
  @Input() pages: WikipediaPage[] = [];
  constructor() {}

  ngOnInit(): void {}
}
