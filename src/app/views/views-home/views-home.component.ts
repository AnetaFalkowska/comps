import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { ItemListComponent } from "../item-list/item-list.component";

@Component({
  selector: 'app-views-home',
  imports: [RouterModule, StatisticsComponent, DividerComponent, ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.scss',
})
export class ViewsHomeComponent {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Satisfaction Score' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a fantastic dresser',
    },
  ];
}
