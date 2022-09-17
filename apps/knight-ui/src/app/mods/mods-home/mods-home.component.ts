import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-pg-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
})
export class ModsHomeComponent implements OnInit {
  isModalVisible = false;
  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
