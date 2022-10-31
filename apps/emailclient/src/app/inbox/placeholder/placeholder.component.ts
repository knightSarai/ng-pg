import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

function isString(value: any): value is string {
  return typeof value === 'string';
}

@Component({
  selector: 'ng-pg-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent implements OnInit {
 public message = '';
  constructor(private router: Router) {
    const routerState = this.router.getCurrentNavigation()?.extras.state
    const message = routerState ? routerState['message'] : null;
    if (isString(message)) this.message = message;
  }

  ngOnInit(): void {}
}
