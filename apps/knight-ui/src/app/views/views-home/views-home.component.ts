import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-pg-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a description for the couch',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a description for the dresser',
    }

  ]
  constructor() {}

  ngOnInit(): void {}
}
