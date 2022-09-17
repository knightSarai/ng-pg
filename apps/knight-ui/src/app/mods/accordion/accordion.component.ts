import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ng-pg-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() items: {title: string, description: string}[] = [];
  openedItemIndex = -1;
  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1;
      return;
    }
    this.openedItemIndex = index;
  }
}
