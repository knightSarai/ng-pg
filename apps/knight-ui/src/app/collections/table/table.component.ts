import { Component, Input, OnInit } from '@angular/core';
import { TableHeader, TableRow } from  '../app-interfaces'


@Component({
  selector: 'ng-pg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input('class') classNames = ''
  @Input() data:TableRow[] = [];
  @Input() headers:TableHeader[] = [];

  constructor() {}

  ngOnInit(): void {}
}


