import { Routes } from '@angular/router';
import { Layout } from './shared/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/routes').then(m => m.routes),
        title: 'Dashboard'
      },
      {
        path: 'accounts',
        loadChildren: () => import('./features/account/routes').then(m => m.routes),
        title: 'Account Details'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./shared/not-found/not-found').then(m => m.NotFound),
    title: '404 - Page Not Found'
  }
];
