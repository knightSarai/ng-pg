import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'ng-pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'emailclient';
  user$ = this.authService.user$;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.checkAuth().subscribe();
  }
}
