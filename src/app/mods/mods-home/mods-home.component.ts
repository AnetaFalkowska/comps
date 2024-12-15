import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { NgIf } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-mods-home',
  imports: [ModalComponent, DividerComponent, NgIf, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.scss',
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue because it is.',
    },
    {
      title: 'What does an orange test like?',
      content: 'An orange test like an orange.',
    },
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue because it is.',
    },
    {
      title: 'What does an orange test like?',
      content: 'An orange test like an orange.',
    },
  ];
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
