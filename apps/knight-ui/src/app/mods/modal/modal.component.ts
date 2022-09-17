import { Component, ElementRef, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ng-pg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy{
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  onCloseClick() {
    this.close.emit();
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}
