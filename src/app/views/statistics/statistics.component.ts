import { Component, Input } from '@angular/core';
import { stat } from '../../model/stat';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-statistics',
  imports: [NgFor],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
@Input() data:stat[] = []

}
