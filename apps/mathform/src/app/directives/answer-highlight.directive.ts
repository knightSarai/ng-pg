import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs';

@Directive({
  selector: '[ngPgAnswerHighlight]'
})
export class AnswerHighlightDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    const formGroup = this.controlName.control?.parent;
    if (formGroup) {
      formGroup.valueChanges
        .pipe(
          map(({ a, b, answer })=> Math.abs((a + b - answer) / (a + b))),
        )
        .subscribe((value) => {
          if (value < 0.2) {
            this.el.nativeElement.classList.add('close');
          } else {
            this.el.nativeElement.classList.remove('close');
          }
        })
    }
  }

}
