import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NotFoundComponent, DividerComponent],
  exports: [NotFoundComponent, DividerComponent],
})
export class UiModule {}
