import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  constructor(private element: ElementRef) {}
  @Output() close = new EventEmitter();

  ngOnInit(): void {
    document.body.appendChild(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.element.nativeElement.remove();
  }

  onCloseClick() {
    console.log('clicked')
    this.close.emit();
  }
}
