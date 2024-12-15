import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';

export const routes: Routes = [
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then(
        (m) => m.ElementsModule
      ),
  },  
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then(
        (m) => m.ViewsModule
      ),
  },
  {
    path: 'mods',
    loadChildren: () =>
      import('./mods/mods.module').then(
        (m) => m.ModsModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

// loadChildren: () =>
//   import('./elements/elements.module').then(
//     (m) => m.ElementsModule
//   ),
