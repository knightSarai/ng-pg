import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { UiModule } from '@ng-pg/ui';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, CardFormComponent, CardComponent],
  imports: [BrowserModule, ReactiveFormsModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
