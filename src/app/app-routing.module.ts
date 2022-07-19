import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
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
