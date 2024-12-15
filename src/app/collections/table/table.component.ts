import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [NgFor, NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input('class') classNames = '';
  @Input() data: { [key: string]: string|number }[] = [];
  @Input() headers: { key: string; label: string }[] = [];

}
