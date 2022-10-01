import { Component, Input, Output, EventEmitter} from '@angular/core';
import { User } from '@ng-pg/api-interfaces';

@Component({
  selector: 'ng-pg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: User | null;
  @Output() signout: EventEmitter<void> = new EventEmitter();

  onSignout() {
    this.signout.emit();
  }
}
