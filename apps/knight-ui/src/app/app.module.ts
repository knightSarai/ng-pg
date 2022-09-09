import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './knight-ui/home/home.component';
import { UiModule, NotFoundComponent } from '@ng-pg/ui'
import {} from '@ng-pg/api-interfaces'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: '**', component: NotFoundComponent},
      ], 
      { initialNavigation: 'enabledBlocking' }
    ),
    UiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
