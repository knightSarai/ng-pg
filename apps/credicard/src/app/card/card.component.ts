import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-pg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() number: string;
  @Input() expiration: string;

  constructor() {}

  ngOnInit(): void {}
}
