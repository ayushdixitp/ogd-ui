import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/locales',
    pathMatch: 'full',
  },
  {
    path: 'locales',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/locales/locales.module').then(m => m.LocalesModule),
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
          import('./pages/configurations/configurations.module').then(
            m => m.ConfigurationsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
