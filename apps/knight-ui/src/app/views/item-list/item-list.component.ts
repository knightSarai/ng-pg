import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-pg-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() items: any = [];
  constructor() {}

  ngOnInit(): void {}
}
