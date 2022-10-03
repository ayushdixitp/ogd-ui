import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    // component:DashboardComponent,
    loadChildren: () =>
      import('./dashboard.module').then(m => {
        console.log('Normal ROUTE');
        return m.DashboardModule;
      }),
  },
  {
    path: 'dashboard/:exp/:channel',
    // component:DashboardComponent,
    loadChildren: () =>
      import('./dashboard.module').then(m => {
        console.log('Normal ROUTE');
        return m.DashboardModule;
      }),
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {
  constructor() {
    // debugger
  }
}
