import { Component, Input } from '@angular/core';
import { item } from '../../model/item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [NgFor],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
@Input() items:item[] = [];
}
