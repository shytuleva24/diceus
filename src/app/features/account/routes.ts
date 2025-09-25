import { Routes } from '@angular/router';

import { Account } from './account';

export const routes: Routes = [
  {
    path: '',
    component: Account,
    title: 'Account Details',
  },
];

export default routes;
