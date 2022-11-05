import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DividerComponent } from './divider/divider.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { BootstrapInputComponent } from './bootstrap-input/bootstrap-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    NotFoundComponent,
    DividerComponent,
    InputComponent,
    ModalComponent,
    BootstrapInputComponent,
  ],
  exports: [
    NotFoundComponent,
    DividerComponent,
    InputComponent,
    ModalComponent,
    BootstrapInputComponent,
  ],
})
export class UiModule {}
