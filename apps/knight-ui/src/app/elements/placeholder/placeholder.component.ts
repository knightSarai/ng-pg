import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-pg-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent implements OnInit {
  @Input() showHeader = true;
  @Input() linesNum = 3;
  constructor() {}

  ngOnInit(): void {}
}
