import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { TimesDirective } from '../times.directive';

@Component({
  selector: 'app-placeholder',
  imports: [NgIf, TimesDirective],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
})
export class PlaceholderComponent {
  @Input() header = true;
  @Input() lines = 3;
}
