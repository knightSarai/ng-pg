import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-pg-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() data: any = [];
  constructor() {}

  ngOnInit(): void {}
}
