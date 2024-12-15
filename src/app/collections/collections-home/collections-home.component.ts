import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';
export interface ggg{
  
}

@Component({
  selector: 'app-collections-home',
  imports: [TableComponent, DividerComponent, RouterModule, TabsComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.scss',
})
export class CollectionsHomeComponent {
  data = [
    { name: 'John', age: 27, job: 'Designer' },
    { name: 'Paul', age: 56, job: 'Hairdresser' },
    { name: 'Agnes', age: 19, job: 'Plumber' },
    { name: 'James', age: 32, job: 'Carpenter' },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
