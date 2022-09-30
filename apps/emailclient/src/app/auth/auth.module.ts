import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UiModule } from '@ng-pg/ui';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    UiModule,
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {}
