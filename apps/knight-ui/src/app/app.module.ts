import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RoutingModule } from './routing/routing.module'
import { HomeComponent } from './knight-ui/home/home.component';
import { UiModule } from '@ng-pg/ui'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    UiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
