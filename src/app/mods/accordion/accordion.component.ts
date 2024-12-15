import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [NgFor, NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() data:{title:string; content:string}[] = [];

  openedItemIndex = 0;
  onClick(index:number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1
    } else {this.openedItemIndex = index}

  }

}
