import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-pg-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
})
export class ModsHomeComponent implements OnInit {
  isModalVisible = false;
  accordionItems = [
    {title: "Item 1", description: "Description 1"},
    {title: "Item 2", description: "Description 2"},
    {title: "Item 3", description: "Description 3"},
  ]
  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
