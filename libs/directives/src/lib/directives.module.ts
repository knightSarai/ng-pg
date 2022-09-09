import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatDirective } from './repeat/repeat.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RepeatDirective
  ],
  exports: [RepeatDirective]
})
export class DirectivesModule {}
