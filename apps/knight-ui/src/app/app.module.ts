import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module'
import { HomeComponent } from './knight-ui/home/home.component';
import { UiModule } from '@ng-pg/ui'
import { DirectivesModule } from '@ng-pg/directives'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    UiModule,
    DirectivesModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
