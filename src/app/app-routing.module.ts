import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';
import { LocalesComponent } from './pages/locales/locales.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/locales',
    pathMatch: 'full',
  },
  {
    path: 'locales',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then(m => m.PagesModule),
      },
    ],
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then(m => m.PagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
