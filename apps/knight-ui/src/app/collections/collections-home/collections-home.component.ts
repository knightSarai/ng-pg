import { Component, OnInit } from '@angular/core';
import { TableHeader, TableRow } from '../app-interfaces';

@Component({
  selector: 'ng-pg-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss'],
})
export class CollectionsHomeComponent implements OnInit {
  data: TableRow[] = [
    { name: 'John', age: 30, job: 'Designer' },
    { name: 'Jane', age: 25, job: 'Engineer' },
    { name: 'Bob', age: 35, job: 'Developer' },
    { name: 'Alice', age: 40, job: 'Architect' },
  ];
  headers: TableHeader[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]

  constructor() {}

  ngOnInit(): void {}
}
