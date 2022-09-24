import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DividerComponent } from './divider/divider.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NotFoundComponent, DividerComponent, InputComponent],
  exports: [NotFoundComponent, DividerComponent, InputComponent],
})
export class UiModule {}
