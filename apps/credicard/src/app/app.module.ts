import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { UiModule } from '@ng-pg/ui';

@NgModule({
  declarations: [AppComponent, CardFormComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
