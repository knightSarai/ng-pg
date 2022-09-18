import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ng-pg-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term: string  = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
